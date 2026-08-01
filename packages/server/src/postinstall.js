import { readFile, readdir, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const __dirname = import.meta.dirname

const root = join(__dirname, '..', '..', '..')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const workerPath = join(root, '.tmp', 'dist', 'dist', 'findWidgetWorkerMain.js')

const require = createRequire(import.meta.url)
const staticServerPackagePath = require.resolve('@lvce-editor/static-server/package.json')
const serverStaticPath = join(dirname(staticServerPackagePath), 'static')

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find(isCommitHash) || ''
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

const content = await readFile(rendererWorkerMainPath, 'utf-8')

const remoteUrl = getRemoteUrl(workerPath)
if (!content.includes('// const findWidgetWorkerUrl = ')) {
  const occurrence = `const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\``
  const replacement = `// const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\`
const findWidgetWorkerUrl = \`${remoteUrl}\``

  const newContent = content.replace(occurrence, replacement)
  await writeFile(rendererWorkerMainPath, newContent)
}
