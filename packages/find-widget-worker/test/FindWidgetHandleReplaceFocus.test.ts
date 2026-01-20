import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleReplaceFocus from '../src/parts/FindWidgetHandleReplaceFocus/FindWidgetHandleReplaceFocus.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'

test('handleReplaceFocus - no change when same focus', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FocusFindWidgetReplace,
  }
  const result = FindWidgetHandleReplaceFocus.handleReplaceFocus(state)
  expect(result).toBe(state)
})

test('handleReplaceFocus - updates focus and source when different', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: 1,
  }
  const result = FindWidgetHandleReplaceFocus.handleReplaceFocus(state)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(FocusKey.FocusFindWidgetReplace)
  expect(result.focusSource).toBe(FocusSource.User)
})

test('handleReplaceFocus - updates focus from empty', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.Empty,
  }
  const result = FindWidgetHandleReplaceFocus.handleReplaceFocus(state)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(FocusKey.FocusFindWidgetReplace)
  expect(result.focusSource).toBe(FocusSource.User)
})
