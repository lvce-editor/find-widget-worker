import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as FindWidgetFocusCloseButton from '../src/parts/FindWidgetFocusCloseButton/FindWidgetFocusCloseButton.ts'

test('focusCloseButton - sets focus and source', () => {
  const state: FindWidgetState = createDefaultState()
  const result = FindWidgetFocusCloseButton.focusCloseButton(state)
  expect(result.focus).toBe(FocusKey.FocusFindWidgetCloseButton)
  expect(result.focusSource).toBe(FocusSource.Script)
})

test('focusCloseButton - returns same object if already focused', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FocusFindWidgetCloseButton,
  }
  const result = FindWidgetFocusCloseButton.focusCloseButton(state)
  expect(result).toBe(state)
})
