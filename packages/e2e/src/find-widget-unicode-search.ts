import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-unicode-search'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `Hello 世界
こんにちは world
🎉 celebration 🎉
café résumé naïve`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()

  // act - search for Chinese characters
  await FindWidget.setValue('世界')

  // assert
  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toBeVisible()
  await expect(findWidgetMatchCount).toHaveText('1 of 1')

  // act - search for Japanese characters
  await FindWidget.setValue('こんにちは')

  // assert
  await expect(findWidgetMatchCount).toHaveText('1 of 1')

  // act - search for emoji
  await FindWidget.setValue('🎉')

  // assert
  await expect(findWidgetMatchCount).toHaveText('1 of 2')

  // act - search for accented characters
  await FindWidget.setValue('café')

  // assert
  await expect(findWidgetMatchCount).toHaveText('1 of 1')
}
