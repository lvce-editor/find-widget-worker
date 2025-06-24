import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Diff from '../src/parts/Diff/Diff.ts'

test('diff should return empty array for identical states', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: readonly number[] = Diff.diff(oldState, newState)
  expect(result).toEqual([])
})

test('diff should return diff types when states differ', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'different' }
  const result: readonly number[] = Diff.diff(oldState, newState)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})
