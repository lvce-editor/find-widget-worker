import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleFindFocus from '../src/parts/FindWidgetHandleFindFocus/FindWidgetHandleFindFocus.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'

test('handleFindFocus - no change when same focus', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FindWidget,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state)
  expect(result).toBe(state)
})

test('handleFindFocus - updates focus and source when different', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: 1,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(FocusKey.FindWidget)
  expect(result.focusSource).toBe(FocusSource.User)
})

test('handleFindFocus - updates focus from empty', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.Empty,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(FocusKey.FindWidget)
  expect(result.focusSource).toBe(FocusSource.User)
})
