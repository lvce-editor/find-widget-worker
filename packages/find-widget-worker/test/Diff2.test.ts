import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Diff2 from '../src/parts/Diff2/Diff2.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('diff2 should return diff result for state', () => {
  const uid: number = 1
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  FindWidgetStates.set(uid, state, state)
  const result: readonly number[] = Diff2.diff2(uid)
  expect(Array.isArray(result)).toBe(true)
})
