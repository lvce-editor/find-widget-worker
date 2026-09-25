import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../test/SetWorkspacePath.js'

export const name = 'find-widget-slow-regex'

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  const tmpDir = await FileSystem.getTmpDir()
  const lines = Array.from({ length: 200 }, (_, index) => `${'a'.repeat(18)}c ${index}`)
  await FileSystem.writeFile(`${tmpDir}/medium-file-slow-regex.txt`, lines.join('\n'))
  await setWorkspacePath(Workspace, tmpDir)
  await Main.openUri(`${tmpDir}/medium-file-slow-regex.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()
  await FindWidget.toggleUseRegularExpression()

  const matchCount = Locator('.FindWidgetMatchCount')
  await FindWidget.setValue('^(a|aa)+b$')
  await expect(matchCount).toBeVisible()
  await expect(matchCount).toHaveText('No Results')

  await FindWidget.setValue('c')
  await expect(matchCount).toHaveText('1 of 200')
}
