import { beforeAll, expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registery'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { focusFirst, focusIndex, focusLast, focusNext, focusPrevious } from '../src/parts/FindWidgetFocusIndex/FindWidgetFocusIndex.ts'

beforeAll(() => {
  const commandMap = {
    'Editor.setSelections2': () => {
      return undefined
    },
  }
  EditorWorker.registerMockRpc(commandMap)
})

test('focusIndex should return same state when index equals matchIndex', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 2,
    matchCount: 5,
  }
  const result = await focusIndex(state, 2)
  expect(result).toBe(state)
})

test('focusIndex should update matchIndex when index differs', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 1,
    matchCount: 5,
  }
  const result = await focusIndex(state, 3)
  expect(result.matchIndex).toBe(3)
})

test('focusFirst should set matchIndex to 0', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 2,
    matchCount: 5,
  }
  const result = await focusFirst(state)
  expect(result.matchIndex).toBe(0)
})

test('focusLast should set matchIndex to last index', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 0,
    matchCount: 5,
  }
  const result = await focusLast(state)
  expect(result.matchIndex).toBe(4)
})

test('focusNext should increment matchIndex', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 1,
    matchCount: 5,
  }
  const result = await focusNext(state)
  expect(result.matchIndex).toBe(2)
})

test('focusNext should wrap to first when at last index', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 4,
    matchCount: 5,
  }
  const result = await focusNext(state)
  expect(result.matchIndex).toBe(0)
})

test('focusPrevious should decrement matchIndex', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 2,
    matchCount: 5,
  }
  const result = await focusPrevious(state)
  expect(result.matchIndex).toBe(1)
})

test('focusPrevious should wrap to last when at first index', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 0,
    matchCount: 5,
  }
  const result = await focusPrevious(state)
  expect(result.matchIndex).toBe(4)
})

test('focusNext should handle single match case', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 0,
    matchCount: 1,
  }
  const result = await focusNext(state)
  expect(result.matchIndex).toBe(0)
})

test('focusPrevious should handle single match case', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 0,
    matchCount: 1,
  }
  const result = await focusPrevious(state)
  expect(result.matchIndex).toBe(0)
})

test('focusIndex should handle edge cases', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchIndex: 0,
    matchCount: 1,
  }
  const result = await focusIndex(state, 0)
  expect(result.matchIndex).toBe(0)
})
