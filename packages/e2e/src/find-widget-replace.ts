import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-replace'

<<<<<<< HEAD
export const test: Test = async ({ FileSystem, Workspace, Main, Editor, FindWidget }) => {
=======
export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
>>>>>>> origin/main
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file1.txt`, `a`)
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 7]))
  await Editor.openFindWidget()
  await FindWidget.toggleReplace()
  await FindWidget.setReplaceValue('b')

  // act
  await FindWidget.replace()

  // assert
  await Editor.shouldHaveText('b')
}
