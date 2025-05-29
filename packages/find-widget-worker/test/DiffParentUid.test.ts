import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffParentUid from '../src/parts/DiffParentUid/DiffParentUid.ts'

test('isEqual - same version', () => {
  const state1 = createDefaultState()
  const state2 = createDefaultState()
  expect(DiffParentUid.isEqual(state1, state2)).toBe(true)
})

test('isEqual - different version', () => {
  const state1 = createDefaultState()
  const state2: FindWidgetState = {
    ...createDefaultState(),
    version: 2,
  }
  expect(DiffParentUid.isEqual(state1, state2)).toBe(false)
})
