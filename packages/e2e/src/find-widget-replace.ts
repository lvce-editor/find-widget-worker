import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../test/SetWorkspacePath.js'

export const name = 'find-widget-replace'

export const test: Test = async ({ Editor, FileSystem, FindWidget, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file1.txt`, `a`)
  await setWorkspacePath(Workspace, tmpDir)
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
