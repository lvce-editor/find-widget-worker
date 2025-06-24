import { test, expect } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as SetFindWidgetFocus from '../src/parts/SetFindWidgetFocus/SetFindWidgetFocus.ts'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'

test('setFindWidgetFocus should return same state if focus key is same', () => {
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = SetFindWidgetFocus.setFindWidgetFocus(state, state.focus)
  expect(result).toBe(state)
})

test('setFindWidgetFocus should update focus and focusSource', () => {
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const newFocusKey: number = 5
  const result: FindWidgetState = SetFindWidgetFocus.setFindWidgetFocus(state, newFocusKey)
  expect(result.focus).toBe(newFocusKey)
  expect(result.focusSource).toBe(FocusSource.Script)
})
