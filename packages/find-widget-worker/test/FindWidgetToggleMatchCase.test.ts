import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetRefreshWithEditor from '../src/parts/FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'
import * as FindWidgetToggleMatchCase from '../src/parts/FindWidgetToggleMatchCase/FindWidgetToggleMatchCase.ts'

test('toggleMatchCase - toggles from false to true', () => {
  const state = createDefaultState()
  const result = FindWidgetToggleMatchCase.toggleMatchCase(state)
  expect(result.matchCase).toBe(true)
})

test('toggleMatchCase - toggles from true to false', () => {
  const state = { ...createDefaultState(), matchCase: true }
  const result = FindWidgetToggleMatchCase.toggleMatchCase(state)
  expect(result.matchCase).toBe(false)
})

test('toggleMatchCase - recomputes matches', () => {
  const base = {
    ...createDefaultState(),
    lines: ['ABC', 'abc', 'Abc'],
    value: 'abc',
  }
  const refreshed = FindWidgetRefreshWithEditor.refresh(base, base.value, 0)
  expect(refreshed.matchCount).toBe(3)
  const afterToggle = FindWidgetToggleMatchCase.toggleMatchCase(refreshed)
  expect(afterToggle.matchCase).toBe(true)
  expect(afterToggle.matchCount).toBe(1)
})
