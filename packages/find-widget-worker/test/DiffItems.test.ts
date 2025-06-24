import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual returns true when all items are equal', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = createDefaultState()
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual returns false when version is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), version: 2 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when replaceExpanded is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), replaceExpanded: true }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when matchCount is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), matchCount: 5 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when matchIndex is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), matchIndex: 2 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})
