import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetTogglePreserveCase from '../src/parts/FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'

test('togglePreserveCase - toggles from false to true', () => {
  const state = createDefaultState()
  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  expect(result.preserveCase).toBe(true)
})

test('togglePreserveCase - toggles from true to false', () => {
  const state = { ...createDefaultState(), preserveCase: true }
  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  expect(result.preserveCase).toBe(false)
})
