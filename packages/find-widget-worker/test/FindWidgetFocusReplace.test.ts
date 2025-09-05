import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'
import * as FindWidgetFocusReplace from '../src/parts/FindWidgetFocusReplace/FindWidgetFocusReplace.ts'

test('focusReplace - sets focus and source', () => {
  const state: FindWidgetState = createDefaultState()
  const result = FindWidgetFocusReplace.focusReplace(state)
  expect(result.focus).toBe(FocusKey.FocusFindWidgetReplace)
  expect(result.focusSource).toBe(FocusSource.Script)
})

test('focusReplace - returns same object if already focused', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FocusFindWidgetReplace,
  }
  const result = FindWidgetFocusReplace.focusReplace(state)
  expect(result).toBe(state)
})
