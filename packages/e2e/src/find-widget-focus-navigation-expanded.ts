import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-focus-navigation-expandd'

export const skip = 1

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file1.txt`, ``)
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))

  // act
  await Editor.openFindWidget()

  // assert
  const findWidgetInput = Locator('.FindWidget .MultilineInputBox')
  await expect(findWidgetInput).toBeVisible()
  await expect(findWidgetInput).toHaveValue('')
  await expect(findWidgetInput).toBeFocused()

  // act
  await FindWidget.focusNext()

  // assert

  // TODO
}
