import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-focus-previous'

export const test: Test = async ({ Command, FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `content 1
content 2`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 7]))
  await Editor.openFindWidget()
  await FindWidget.focusNext()

  // act
  await FindWidget.focusPrevious()

  // assert
  const findWidgetInput = Locator('.FindWidget .MultilineInputBox')
  await expect(findWidgetInput).toBeVisible()
  await expect(findWidgetInput).toHaveValue('content')
  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toBeVisible()
  await expect(findWidgetMatchCount).toHaveText('1 of 2')
}
