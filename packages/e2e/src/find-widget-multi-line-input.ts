import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-multi-line-input'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(
    `${tmpDir}/file1.txt`,
    `a
b
c`,
  )
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 7]))
  await Editor.openFindWidget()

  // act
  await FindWidget.setValue(`a
b
c`)

  // assert
  const input = Locator('.FindWidget [name="search-value"]')
  await expect(input).toBeVisible()
  // await expect(input).toHaveCSS('height', '60px') // TODO
}
