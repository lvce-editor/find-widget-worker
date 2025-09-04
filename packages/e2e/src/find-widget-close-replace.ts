import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'viewlet.editor-close-replace'

export const skip = 1

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
  await Command.execute(`FindWidget.toggleReplace`)

  // act
  await Command.execute(`FindWidget.toggleReplace`)

  // assert
  const toggleReplace = Locator('.FindWidget [name="ToggleReplace"]')
  await expect(toggleReplace).toHaveAttribute(`aria-expanded`, `false`)
  const replace = Locator(`.FindWidget .FindWidgetReplace`)
  await expect(replace).toBeHidden()
}
