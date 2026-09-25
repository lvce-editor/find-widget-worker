import type { Test } from '@lvce-editor/test-with-playwright'
import { setWorkspacePath } from '../test/SetWorkspacePath.js'

export const name = 'find-widget-1m-lines'

export const test: Test = async ({ Editor, expect, FileSystem, FindWidget, Locator, Main, Workspace }) => {
  const tmpDir = await FileSystem.getTmpDir()
  const lines = Array.from({ length: 1_000_000 }, (_, index) => (index % 100 === 0 ? `needle ${index}` : `line ${index}`))
  await FileSystem.writeFile(`${tmpDir}/large-file.txt`, lines.join('\n'))
  await setWorkspacePath(Workspace, tmpDir)
  await Main.openUri(`${tmpDir}/large-file.txt`)
  await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
  await Editor.openFindWidget()

  const matchCount = Locator('.FindWidgetMatchCount')
  await FindWidget.setValue('needle')
  await expect(matchCount).toBeVisible()
  await expect(matchCount).toHaveText('1 of 10000')

  await FindWidget.focusNext()
  await expect(matchCount).toHaveText('2 of 10000')
  await FindWidget.setValue('no-such-match')
  await expect(matchCount).toHaveText('No Results')
}
