import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleFindFocus from '../src/parts/FindWidgetHandleFindFocus/FindWidgetHandleFindFocus.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('handleFindFocus - no change when same focus', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state, InputName.SearchValue)
  expect(result).toBe(state)
})

test('handleFindFocus - updates focus and source when different', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: 1,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state, InputName.SearchValue)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(WhenExpression.FocusSearchInput)
  expect(result.focusSource).toBe(FocusSource.User)
})

test('handleFindFocus - updates focus from empty', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.Empty,
  }
  const result = FindWidgetHandleFindFocus.handleFindFocus(state, InputName.MatchCase)
  expect(result).not.toBe(state)
  expect(result.focus).toBe(WhenExpression.FocusSearchMatchCase)
  expect(result.focusSource).toBe(FocusSource.User)
})
