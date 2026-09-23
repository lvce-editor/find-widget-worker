import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../../test/SetWorkspacePath.js'

export const name = 'find-widget-replace-input-focus'

export const skip = 1

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
  await Editor.setSelections(new Uint32Array([0, 0, 0, 7]))
  await Editor.openFindWidget()

  // assert - find input should be focused initially
  const findWidgetInput = Locator('.FindWidget [name="search-value"]')
  await expect(findWidgetInput).toBeVisible()
  await expect(findWidgetInput).toBeFocused()

  // act - toggle replace to show replace input
  await FindWidget.toggleReplace()

  // assert - replace section should be visible
  const replace = Locator(`.FindWidget .FindWidgetReplace`)
  await expect(replace).toBeVisible()

  // act - set a replace value (this will focus the replace input)
  await FindWidget.setReplaceValue('replaced')

  // assert - replace input should have the value
  const replaceInput = Locator('.FindWidget .FindWidgetReplace .MultilineInputBox')
  await expect(replaceInput).toBeVisible()
  await expect(replaceInput).toHaveValue('replaced')
}
