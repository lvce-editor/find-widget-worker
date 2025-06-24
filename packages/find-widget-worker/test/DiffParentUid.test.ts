import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffParentUid from '../src/parts/DiffParentUid/DiffParentUid.ts'

test('isEqual - same version', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = createDefaultState()
  const result: boolean = DiffParentUid.isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual - different version', () => {
  const state1: FindWidgetState = createDefaultState()
  const state2: FindWidgetState = {
    ...createDefaultState(),
    version: 2,
  }
  const result: boolean = DiffParentUid.isEqual(state1, state2)
  expect(result).toBe(false)
})
