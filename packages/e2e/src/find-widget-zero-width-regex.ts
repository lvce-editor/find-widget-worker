import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../test/SetWorkspacePath.js'

export const name = 'find-widget-zero-width-regex'

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/file.txt`, 'foo\nbar\nfoo')
  await setWorkspacePath(Workspace, tmpDir)
  await Main.openUri(`${tmpDir}/file.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()
  await FindWidget.toggleUseRegularExpression()

  const matchCount = Locator('.FindWidgetMatchCount')
  await FindWidget.setValue('')
  await expect(matchCount).toBeVisible()
  await expect(matchCount).toHaveText('No Results')

  await FindWidget.setValue('(?=o)')
  await expect(matchCount).toBeVisible()
  await expect(matchCount).toHaveText('1 of 4')

  await FindWidget.setValue('^')
  await expect(matchCount).toHaveText('1 of 3')

  await FindWidget.setValue('foo')
  await expect(matchCount).toHaveText('1 of 2')
}
