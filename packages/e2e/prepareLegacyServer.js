import { readFile, readdir, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = join(import.meta.dirname, '..', '..')
const workerPath = join(root, '.tmp', 'dist', 'dist', 'findWidgetWorkerMain.js')

const require = createRequire(import.meta.url)
const legacyServerPackagePath = require.resolve('@lvce-editor/legacy-server/package.json')
const legacyRequire = createRequire(legacyServerPackagePath)
const staticServerPackagePath = legacyRequire.resolve('@lvce-editor/static-server/package.json')
const serverStaticPath = join(dirname(staticServerPackagePath), 'static')

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find((dirent) => dirent.length === 7 && /^[a-z\d]+$/.test(dirent)) || ''
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

const content = await readFile(rendererWorkerMainPath, 'utf8')
if (!content.includes('// const findWidgetWorkerUrl = ')) {
  const remoteUrl = `/remote/${pathToFileURL(workerPath).toString().slice(8)}`
  const occurrence = `const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\``
  const replacement = `// const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\`
const findWidgetWorkerUrl = \`${remoteUrl}\``
  await writeFile(rendererWorkerMainPath, content.replace(occurrence, replacement))
}
