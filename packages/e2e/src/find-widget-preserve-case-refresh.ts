import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'find-widget-preserve-case-refresh'

export const test: Test = async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file1.txt`, 'foo foo foo')
  await Workspace.setPath(tmpDir)
  await Main.openUri(`${tmpDir}/file1.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()
  await FindWidget.setValue('foo')

  const matchCount = Locator('.FindWidgetMatchCount')
  await expect(matchCount).toHaveText('1 of 3')

  await FindWidget.focusNext()
  await expect(matchCount).toHaveText('2 of 3')
  await FindWidget.togglePreserveCase()
  await expect(matchCount).toHaveText('1 of 3')

  await FindWidget.focusNext()
  await expect(matchCount).toHaveText('2 of 3')
  await FindWidget.togglePreserveCase()
  await expect(matchCount).toHaveText('1 of 3')
}
