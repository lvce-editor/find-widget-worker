import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as FindWidgetFocusReplaceAllButton from '../src/parts/FindWidgetFocusReplaceAllButton/FindWidgetFocusReplaceAllButton.ts'

test('focusReplaceAllButton - sets focus and source', () => {
  const state: FindWidgetState = createDefaultState()
  const result = FindWidgetFocusReplaceAllButton.focusReplaceAllButton(state)
  expect(result.focus).toBe(FocusKey.FocusFindWidgetReplaceAllButton)
  expect(result.focusSource).toBe(FocusSource.Script)
})

test('focusReplaceAllButton - returns same object if already focused', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FocusFindWidgetReplaceAllButton,
  }
  const result = FindWidgetFocusReplaceAllButton.focusReplaceAllButton(state)
  expect(result).toBe(state)
})
