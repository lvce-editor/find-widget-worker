import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { refresh } from '../src/parts/FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'

test('refresh with empty value', () => {
  const state = createDefaultState()
  const result = refresh(state, '')
  expect(result.matches).toEqual(new Uint32Array([]))
  expect(result.matchCount).toBe(0)
  expect(result.matchIndex).toBe(0)
  expect(result.value).toBe('')
})

test('refresh with matching value', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    lines: ['hello', 'world', 'hello world'],
  }
  const result = refresh(state, 'hello')
  expect(result.matches).toEqual([0, 0, 2, 0])
  expect(result.matchCount).toBe(2)
  expect(result.matchIndex).toBe(0)
  expect(result.value).toBe('hello')
})

test('refresh with case insensitive matching', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    lines: ['Hello', 'WORLD', 'hello World'],
  }
  const result = refresh(state, 'hello')
  expect(result.matches).toEqual([0, 0, 2, 0])
  expect(result.matchCount).toBe(2)
  expect(result.matchIndex).toBe(0)
  expect(result.value).toBe('hello')
})
