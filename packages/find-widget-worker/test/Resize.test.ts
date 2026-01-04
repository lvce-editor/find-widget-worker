import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test('resize - returns same state (no-op)', async () => {
  const state = { ...createDefaultState(), height: 20, width: 100, x: 10, y: 10 }
  const dimensions = { height: 40, width: 200, x: 20, y: 30 }
  const result = await Resize.resize(state, dimensions)
  expect(result).toBe(state)
})
