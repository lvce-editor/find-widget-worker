import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
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
