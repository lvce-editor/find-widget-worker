import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-keyboard-navigation'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget, Keyboard }) => {
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
  await Editor.setSelections(new Uint32Array([0, 0, 0, 7]))
  await Editor.openFindWidget()

  // assert - find input should be focused initially
  const findWidgetInput = Locator('.FindWidget .MultilineInputBox')
  await expect(findWidgetInput).toBeVisible()
  await expect(findWidgetInput).toBeFocused()

  const findWidgetMatchCount = Locator(`.FindWidgetMatchCount`)
  await expect(findWidgetMatchCount).toHaveText('1 of 3')

  // act - press Enter to go to next match
  await Keyboard.press('Enter')

  // assert - should move to next match
  await expect(findWidgetMatchCount).toHaveText('2 of 3')

  // act - press Shift+Enter to go to previous match
  await Keyboard.press('Shift+Enter')

  // assert - should move back to first match
  await expect(findWidgetMatchCount).toHaveText('1 of 3')

  // act - press Tab to navigate to next element
  await Keyboard.press('Tab')

  // assert - match case button should be focused
  const matchCaseButton = Locator(`.SearchFieldButton[name="MatchCase"]`)
  await expect(matchCaseButton).toBeFocused()

  // act - press Tab again to navigate to next element
  await Keyboard.press('Tab')

  // assert - match whole word button should be focused
  const matchWholeWordButton = Locator(`.SearchFieldButton[name="MatchWholeWord"]`)
  await expect(matchWholeWordButton).toBeFocused()

  // act - press Shift+Tab to navigate to previous element
  await Keyboard.press('Shift+Tab')

  // assert - match case button should be focused again
  await expect(matchCaseButton).toBeFocused()

  // act - press Space to toggle match case
  await Keyboard.press('Space')

  // assert - match case should be enabled
  await expect(matchCaseButton).toHaveAttribute(`aria-checked`, 'true')
}
