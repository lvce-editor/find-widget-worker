import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetFocusFind from '../src/parts/FindWidgetFocusFind/FindWidgetFocusFind.ts'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'

test('focusFind - sets focus and source', () => {
  const state: FindWidgetState = createDefaultState()
  const result = FindWidgetFocusFind.focusFind(state)
  expect(result.focus).toBe(FocusKey.FindWidget)
  expect(result.focusSource).toBe(FocusSource.Script)
})

test('focusFind - returns same object if already focused', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: FocusKey.FindWidget,
  }
  const result = FindWidgetFocusFind.focusFind(state)
  expect(result).toBe(state)
})
