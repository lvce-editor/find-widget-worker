import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { isEqual } from '../src/parts/DiffFocus/DiffFocus.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'

test('isEqual - returns true when focus changed in the DOM', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    focus: 1,
    focusSource: FocusSource.User,
  }

  expect(isEqual(oldState, newState)).toBe(true)
})

test('isEqual - returns false when focus changed programmatically', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    focus: 1,
    focusSource: FocusSource.Script,
  }

  expect(isEqual(oldState, newState)).toBe(false)
})

test('isEqual - returns false when focus is requested again', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    focusVersion: oldState.focusVersion + 1,
  }

  expect(isEqual(oldState, newState)).toBe(false)
})
