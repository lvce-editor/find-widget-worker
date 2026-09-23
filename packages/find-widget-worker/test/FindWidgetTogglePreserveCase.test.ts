import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetRefreshWithEditor from '../src/parts/FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'
import * as FindWidgetTogglePreserveCase from '../src/parts/FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'

test('togglePreserveCase - toggles from false to true', () => {
  const state = createDefaultState()
  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  expect(result.preserveCase).toBe(true)
})

test('togglePreserveCase - toggles from true to false', () => {
  const state = { ...createDefaultState(), preserveCase: true }
  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  expect(result.preserveCase).toBe(false)
})

test('togglePreserveCase - recomputes matches when enabling preserve case', () => {
  const state = {
    ...createDefaultState(),
    lines: ['ABC', 'abc', 'Abc'],
    matchCount: 1,
    matches: new Uint32Array([0]),
    value: 'abc',
  }
  const { value } = state

  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  const expected = FindWidgetRefreshWithEditor.refresh(state, value, 0)

  expect(result.preserveCase).toBe(true)
  expect(result.value).toBe(value)
  expect(result.matchCount).toBe(3)
  expect(result.matches).toEqual(expected.matches)
})

test('togglePreserveCase - recomputes matches when disabling preserve case', () => {
  const state = {
    ...createDefaultState(),
    lines: ['ABC', 'abc', 'Abc'],
    matchCount: 1,
    matches: new Uint32Array([0]),
    preserveCase: true,
    value: 'abc',
  }
  const { value } = state

  const result = FindWidgetTogglePreserveCase.togglePreserveCase(state)
  const expected = FindWidgetRefreshWithEditor.refresh(state, value, 0)

  expect(result.preserveCase).toBe(false)
  expect(result.value).toBe(value)
  expect(result.matchCount).toBe(3)
  expect(result.matches).toEqual(expected.matches)
})
