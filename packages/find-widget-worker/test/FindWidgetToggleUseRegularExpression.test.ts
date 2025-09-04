import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetToggleUseRegularExpression from '../src/parts/FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'

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
