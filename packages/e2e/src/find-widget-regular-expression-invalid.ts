import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-regular-expression-invalid'

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `content 1
content 2`,
  )
  await Workspace.setUri(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()
  await FindWidget.setValue(`(`)

  // act
  await FindWidget.toggleUseRegularExpression()

  // assert
  const matchCaseCheckBox = Locator(`.SearchFieldButton[name="UseRegularExpression"]`)
  await expect(matchCaseCheckBox).toHaveAttribute(`aria-checked`, 'true')
  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toBeVisible()
  await expect(findWidgetMatchCount).toHaveAttribute('role', 'alert')
  const searchField = Locator(`.FindWidget .SearchField`)
  await expect(searchField).toHaveClass('SearchFieldError')
}
