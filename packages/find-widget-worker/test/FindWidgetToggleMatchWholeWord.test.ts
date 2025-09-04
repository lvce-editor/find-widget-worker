import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetRefreshWithEditor from '../src/parts/FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'
import * as FindWidgetToggleMatchWholeWord from '../src/parts/FindWidgetToggleMatchWholeWord/FindWidgetToggleMatchWholeWord.ts'

test('toggleMatchWholeWord - toggles and recomputes matches', () => {
  const base = {
    ...createDefaultState(),
    lines: ['foo bar', 'foobar', 'foo'],
    value: 'foo',
  }
  const refreshed = FindWidgetRefreshWithEditor.refresh(base, base.value, 0)
  expect(refreshed.matchCount).toBe(3)
  const afterToggle = FindWidgetToggleMatchWholeWord.toggleMatchWholeWord(refreshed)
  expect(afterToggle.matchWholeWord).toBe(true)
  expect(afterToggle.matchCount).toBe(2)
})


