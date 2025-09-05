import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-match-whole-word'

export const skip = 1

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
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
  await FindWidget.setValue(`Content`)

  // act
  await FindWidget.toggleMatchWholeWord()

  // assert
  const matchCaseCheckBox = Locator(`.SearchFieldButton[name="MatchWholeWord"]`)
  await expect(matchCaseCheckBox).toHaveAttribute(`aria-checked`, 'true')
  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toBeVisible()
  await expect(findWidgetMatchCount).toHaveText('No Results')
}
