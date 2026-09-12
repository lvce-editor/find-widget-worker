import { beforeEach, jest, test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleInput from '../src/parts/HandleInput/HandleInput.ts'

const setSelections = jest.fn()

beforeEach(() => {
  setSelections.mockClear()
  EditorWorker.registerMockRpc({ 'Editor.setSelections2': setSelections })
})

test('handleInput - updates value, matches and matchCount (default user)', async () => {
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    lines: ['Hello World', 'hello world', 'HELLO'],
  }
  const result: FindWidgetState = await FindWidgetHandleInput.handleInput(state, 'hello')
  expect(result.value).toBe('hello')
  expect(result.inputSource).toBe(InputSource.User)
  expect([...result.matches]).toEqual([0, 0, 5, 1, 0, 5, 2, 0, 5])
  expect(result.matchCount).toBe(3)
  expect(result.matchIndex).toBe(0)
  expect(setSelections).toHaveBeenCalledWith(state.editorUid, new Uint32Array([0, 0, 0, 5]))
  expect(result.selections).toEqual([0, 0, 0, 5])
})

test('handleInput - uses provided inputSource', async () => {
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    lines: ['abc', 'ABC'],
  }
  const result: FindWidgetState = await FindWidgetHandleInput.handleInput(state, 'abc', InputSource.Script)
  expect(result.value).toBe('abc')
  expect(result.inputSource).toBe(InputSource.Script)
  expect(setSelections).not.toHaveBeenCalled()
})

test.each(['missing', ''])('handleInput does not select when search has no matches: %s', async (value) => {
  const state = { ...CreateDefaultState.createDefaultState(), lines: ['hello'] }
  await FindWidgetHandleInput.handleInput(state, value)
  expect(setSelections).not.toHaveBeenCalled()
})

test('handleInput does not select stale matches for an invalid regex', async () => {
  const state = { ...CreateDefaultState.createDefaultState(), lines: ['hello'], matchCount: 1, matches: [0, 0, 5], useRegularExpression: true }
  await FindWidgetHandleInput.handleInput(state, '[')
  expect(setSelections).not.toHaveBeenCalled()
})
