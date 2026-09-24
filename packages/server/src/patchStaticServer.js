import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const RE_COMMIT_HASH = /^[a-z\d]+$/

const getCommitHash = async (serverStaticPath) => {
  const dirents = await readdir(serverStaticPath)
  const commitHash = dirents.find((dirent) => dirent.length === 7 && RE_COMMIT_HASH.test(dirent))
  if (!commitHash) {
    throw new Error(`Could not find static server commit hash in ${serverStaticPath}`)
  }
  return commitHash
}

const patchFontLoading = async (staticRoot) => {
  const workerMainPath = join(staticRoot, 'packages', 'text-measurement-worker', 'dist', 'textMeasurementWorkerMain.js')
  const occurrence = '    throw new VError(error, `Failed to load font ${fontName}`);'
  const replacement = '    console.warn(new VError(error, `Failed to load font ${fontName}`));'
  let content
  try {
    content = await readFile(workerMainPath, 'utf8')
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return
    }
    throw error
  }
  if (content.includes(replacement)) {
    return
  }
  if (!content.includes(occurrence)) {
    return
  }
  await writeFile(workerMainPath, content.replace(occurrence, replacement))
}

export const patchStaticServer = async ({ serverStaticPath }) => {
  const commitHash = await getCommitHash(serverStaticPath)
  const staticRoot = join(serverStaticPath, commitHash)
  await patchFontLoading(staticRoot)
}
