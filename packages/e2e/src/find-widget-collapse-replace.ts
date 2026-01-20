import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-collapse-replace'

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

  // expand replace section first
  await FindWidget.toggleReplace()

  const toggleReplace = Locator('.FindWidget [name="ToggleReplace"]')
  await expect(toggleReplace).toHaveAttribute(`aria-expanded`, `true`)
  const replace = Locator(`.FindWidget .FindWidgetReplace`)
  await expect(replace).toBeVisible()

  // act - collapse replace section
  await FindWidget.toggleReplace()

  // assert - replace section should be hidden
  await expect(toggleReplace).toHaveAttribute(`aria-expanded`, `false`)
  await expect(replace).toBeHidden()
}
