import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffEventListeners/DiffEventListeners.ts'

test('isEqual returns true when versions are equal', () => {
  const state1 = createDefaultState()
  const state2 = createDefaultState()
  expect(isEqual(state1, state2)).toBe(true)
})

test('isEqual returns false when versions are different', () => {
  const state1 = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), version: 2 }
  expect(isEqual(state1, state2)).toBe(false)
})
