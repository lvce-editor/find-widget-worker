/** @typedef {Parameters<import('@lvce-editor/test-with-playwright').Test>[0]['Workspace']} Workspace */

/**
 * @param {Workspace} workspace
 * @param {string} path
 * @returns {Promise<void>}
 */
export const setWorkspacePath = async (workspace, path) => {
  if (typeof workspace.setUri === 'function') {
    await workspace.setUri(path)
    return
  }

  await workspace.setPath(path)
}
