import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-binary-content'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange - create a file with binary-like content (null bytes, special chars)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `normal text
\x00\x01\x02\x03
more normal text
\xFF\xFE\xFD
end of file`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()

  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)

  // act - search for normal text
  await FindWidget.setValue('normal')

  // assert - should find normal text even with binary content nearby
  await expect(findWidgetMatchCount).toBeVisible()
  await expect(findWidgetMatchCount).toHaveText('1 of 2')

  // act - search for text after binary content
  await FindWidget.setValue('more normal text')

  // assert - should find the text after binary bytes
  await expect(findWidgetMatchCount).toHaveText('1 of 1')

  // act - search for text before binary content
  await FindWidget.setValue('normal text')

  // assert - should find both occurrences
  await expect(findWidgetMatchCount).toHaveText('1 of 2')

  // act - navigate through matches
  await FindWidget.focusNext()

  // assert - should successfully navigate
  await expect(findWidgetMatchCount).toHaveText('2 of 2')

  // act - replace text near binary content
  await FindWidget.toggleReplace()
  await FindWidget.setReplaceValue('replaced text')
  await FindWidget.replace()

  // assert - replace should work correctly
  await expect(findWidgetMatchCount).toHaveText('1 of 1')
}
