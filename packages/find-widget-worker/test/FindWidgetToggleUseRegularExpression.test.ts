import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetToggleUseRegularExpression from '../src/parts/FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'
import * as FindWidgetRefreshWithEditor from '../src/parts/FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'

test('toggleUseRegularExpression - toggles from false to true', () => {
  const state = createDefaultState()
  const result = FindWidgetToggleUseRegularExpression.toggleUseRegularExpression(state)
  expect(result.useRegularExpression).toBe(true)
})

test('toggleUseRegularExpression - toggles from true to false', () => {
  const state = { ...createDefaultState(), useRegularExpression: true }
  const result = FindWidgetToggleUseRegularExpression.toggleUseRegularExpression(state)
  expect(result.useRegularExpression).toBe(false)
})

test('toggleUseRegularExpression - recomputes matches using regex', () => {
  const base = {
    ...createDefaultState(),
    lines: ['abc123', 'def', 'abc'],
    value: 'abc\\d+',
  }
  const refreshed = FindWidgetRefreshWithEditor.refresh(base, base.value, 0)
  expect(refreshed.matchCount).toBe(0)
  const afterToggle = FindWidgetToggleUseRegularExpression.toggleUseRegularExpression(refreshed)
  expect(afterToggle.useRegularExpression).toBe(true)
  expect(afterToggle.matchCount).toBe(1)
})
