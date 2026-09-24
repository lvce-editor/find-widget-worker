import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../test/SetWorkspacePath.js'

export const name = 'find-widget-buttons-disabled'

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `content 1
content 2`,
  )
  await setWorkspacePath(Workspace, tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()

  // act - search for something that doesn't exist
  await FindWidget.setValue('nonexistent')

  // assert - navigation buttons should be disabled when no results
  const buttonPreviousMatch = Locator('[title="Previous Match"]')
  await expect(buttonPreviousMatch).toHaveJSProperty('disabled', true)
  const buttonNextMatch = Locator('[title="Next Match"]')
  await expect(buttonNextMatch).toHaveJSProperty('disabled', true)

  // act - search for something that exists
  await FindWidget.setValue('content')

  // assert - navigation buttons should be enabled when there are results
  await expect(buttonPreviousMatch).toHaveJSProperty('disabled', false)
  await expect(buttonNextMatch).toHaveJSProperty('disabled', false)

  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toHaveText('1 of 2')

  // act - expand replace and clear the query to disable replacement
  await FindWidget.toggleReplace()
  await FindWidget.setValue('')

  // assert - replace buttons should be disabled when the query is empty
  const buttonReplace = Locator('[title="Replace"]')
  await expect(buttonReplace).toHaveJSProperty('disabled', true)
  const buttonReplaceAll = Locator('[title="Replace All"]')
  await expect(buttonReplaceAll).toHaveJSProperty('disabled', true)

  // act - search for something that exists
  await FindWidget.setValue('content')

  // assert - replace buttons should be enabled when there are results
  await expect(buttonReplace).toHaveJSProperty('disabled', false)
  await expect(buttonReplaceAll).toHaveJSProperty('disabled', false)
}
