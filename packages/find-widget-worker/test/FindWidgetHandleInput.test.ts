import { test, expect } from '@jest/globals'
import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleInput from '../src/parts/HandleInput/HandleInput.ts'

test('handleInput - updates value, matches and matchCount (default user)', () => {
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    lines: ['Hello World', 'hello world', 'HELLO'],
  }
  const result: FindWidgetState = FindWidgetHandleInput.handleInput(state, 'hello')
  expect(result.value).toBe('hello')
  expect(result.inputSource).toBe(InputSource.User)
  expect([...result.matches]).toEqual([0, 0, 5, 1, 0, 5, 2, 0, 5])
  expect(result.matchCount).toBe(3)
  expect(result.matchIndex).toBe(0)
})

test('handleInput - uses provided inputSource', () => {
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    lines: ['abc', 'ABC'],
  }
  const result: FindWidgetState = FindWidgetHandleInput.handleInput(state, 'abc', InputSource.Script)
  expect(result.value).toBe('abc')
  expect(result.inputSource).toBe(InputSource.Script)
})
