import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const RE_COMMIT_HASH = /^[a-z\d]+$/

const getCommitHash = async (serverStaticPath) => {
  const dirents = await readdir(serverStaticPath)
  const commitHash = dirents.find((dirent) => dirent.length === 7 && RE_COMMIT_HASH.test(dirent))
  if (!commitHash) {
    throw new Error(`Could not find static server commit hash in ${serverStaticPath}`)
  }
  return commitHash
}

const replaceOnce = (content, occurrence, replacement, description) => {
  if (content.includes(replacement)) {
    return content
  }
  if (!content.includes(occurrence)) {
    throw new Error(`Could not patch ${description}`)
  }
  return content.replace(occurrence, replacement)
}

const patchFile = async (path, occurrence, replacement, description) => {
  const content = await readFile(path, 'utf8')
  const newContent = replaceOnce(content, occurrence, replacement, description)
  if (newContent !== content) {
    await writeFile(path, newContent)
  }
}

const patchOptionalFile = async (path, occurrence, replacement, description) => {
  try {
    const content = await readFile(path, 'utf8')
    if (!content.includes(occurrence) && !content.includes(replacement)) {
      return
    }
    const newContent = replaceOnce(content, occurrence, replacement, description)
    if (newContent !== content) {
      await writeFile(path, newContent)
    }
  } catch (error) {
    if (!error || typeof error !== 'object' || !('code' in error) || error.code !== 'ENOENT') {
      throw error
    }
  }
}

const patchFindWidgetWorkerUrl = async (staticRoot, workerPath) => {
  const rendererWorkerMainPath = join(staticRoot, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')
  const remoteUrl = `/remote/${pathToFileURL(workerPath).toString().slice(8)}`
  const occurrence = `const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\``
  const replacement = `// const findWidgetWorkerUrl = \`\${assetDir}/packages/find-widget-worker/dist/findWidgetWorkerMain.js\`
const findWidgetWorkerUrl = \`${remoteUrl}\``
  await patchFile(rendererWorkerMainPath, occurrence, replacement, 'find widget worker URL')
}

const patchAsyncDispose = async (staticRoot) => {
  const titleBarWorkerMainPath = join(staticRoot, 'packages', 'title-bar-worker', 'dist', 'titleBarWorkerMain.js')
  const occurrence = `  await using rpc = await launchTextMeasurementWorker();
  const isMonospaceFont = false;
  const charWidth = 0;
  const result = await rpc.invoke('TextMeasurement.measureTextWidths', texts, fontWeight, fontSize, fontFamily, letterSpacing, isMonospaceFont, charWidth);
  return result;`
  const replacement = `  const rpc = await launchTextMeasurementWorker();
  try {
    const isMonospaceFont = false;
    const charWidth = 0;
    return await rpc.invoke('TextMeasurement.measureTextWidths', texts, fontWeight, fontSize, fontFamily, letterSpacing, isMonospaceFont, charWidth);
  } finally {
    await rpc[Symbol.asyncDispose]();
  }`
  await patchFile(titleBarWorkerMainPath, occurrence, replacement, 'WebKit-compatible async disposal')
}

const patchFontLoading = async (staticRoot, packageName, fileName) => {
  const workerMainPath = join(staticRoot, 'packages', packageName, 'dist', fileName)
  const occurrence = '    throw new VError(error, `Failed to load font ${fontName}`);'
  const replacement = '    console.warn(new VError(error, `Failed to load font ${fontName}`));'
  await patchOptionalFile(workerMainPath, occurrence, replacement, `WebKit-compatible font loading in ${packageName}`)
}

export const patchStaticServer = async ({ serverStaticPath, workerPath }) => {
  const commitHash = await getCommitHash(serverStaticPath)
  const staticRoot = join(serverStaticPath, commitHash)
  await patchFindWidgetWorkerUrl(staticRoot, workerPath)
  await patchAsyncDispose(staticRoot)
  await patchFontLoading(staticRoot, 'text-measurement-worker', 'textMeasurementWorkerMain.js')
  await patchFontLoading(staticRoot, 'editor-worker', 'editorWorkerMain.js')
}
