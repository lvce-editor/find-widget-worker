import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-keyboard-enter'

// TODO enable after renderer-process includes focus-preserving Viewlet.setDom2 rendering.
export const skip = 1

export const test: Test = async ({ Editor, expect, FileSystem, KeyBoard, Locator, Main, Workspace }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `content 1
content 2
content 3`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.openFindWidget()

  const findWidgetInput = Locator('.FindWidget [name="search-value"]')
  const findWidgetMatchCount = Locator('.FindWidgetMatchCount')
  await expect(findWidgetInput).toBeFocused()

  // act - update the query several times to exercise widget DOM updates
  await findWidgetInput.type('c')
  await expect(findWidgetInput).toBeFocused()
  await findWidgetInput.type('co')
  await expect(findWidgetInput).toBeFocused()
  await findWidgetInput.type('content')

  // assert
  await expect(findWidgetInput).toBeFocused()
  await expect(findWidgetInput).toHaveValue('content')
  await expect(findWidgetMatchCount).toHaveText('1 of 3')

  // act - use the real keyboard path rather than invoking FindWidget.focusNext
  await KeyBoard.press('Enter')

  // assert
  await expect(findWidgetInput).toBeFocused()
  await expect(findWidgetMatchCount).toHaveText('2 of 3')
  await Editor.shouldHaveSelections(new Uint32Array([1, 0, 1, 7]))
  await Editor.shouldHaveText(`content 1
content 2
content 3`)
}
