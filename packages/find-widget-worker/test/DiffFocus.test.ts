import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.ts'

test('isEqual - returns false when focus is requested again', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    focusVersion: oldState.focusVersion + 1,
  }

  expect(isEqual(oldState, newState)).toBe(false)
})
