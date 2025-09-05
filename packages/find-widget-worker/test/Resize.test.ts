import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test('resize - returns same state (no-op)', async () => {
  const state = { ...createDefaultState(), width: 100, height: 20, x: 10, y: 10 }
  const dimensions = { x: 20, y: 30, width: 200, height: 40 }
  const result = await Resize.resize(state, dimensions)
  expect(result).toBe(state)
})
