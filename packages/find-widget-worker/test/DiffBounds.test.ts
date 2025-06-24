import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffBounds/DiffBounds.ts'

test('isEqual returns true when bounds are equal', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = createDefaultState()
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual returns false when x is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), x: 100 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when y is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), y: 100 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when width is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), width: 100 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when height is different', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = { ...createDefaultState(), height: 100 }
  const result: boolean = isEqual(state1, state2)
  expect(result).toBe(false)
})
