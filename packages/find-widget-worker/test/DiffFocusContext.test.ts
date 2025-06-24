import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocusContext/DiffFocusContext.ts'

test('isEqual returns true when focused states are equal', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = createDefaultState()
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual returns false when focused states are different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), focused: true }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})
