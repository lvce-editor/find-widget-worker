import { test, expect } from '@jest/globals'
import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffValue from '../src/parts/DiffValue/DiffValue.ts'

test('isEqual should return true for same values', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: oldState.value }
  const result: boolean = DiffValue.isEqual(oldState, newState)
  expect(result).toBe(true)
})

test('isEqual should return true for user input source', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, inputSource: InputSource.User, value: 'different' }
  const result: boolean = DiffValue.isEqual(oldState, newState)
  expect(result).toBe(true)
})
