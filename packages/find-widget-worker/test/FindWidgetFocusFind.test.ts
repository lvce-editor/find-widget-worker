import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetFocusFind from '../src/parts/FindWidgetFocusFind/FindWidgetFocusFind.ts'
import * as FocusSource from '../src/parts/FocusSource/FocusSource.ts'

test('focusFind - sets focus and source', () => {
  const state: FindWidgetState = createDefaultState()
  const result = FindWidgetFocusFind.focusFind(state)
  expect(result.focus).toBe(WhenExpression.FocusSearchInput)
  expect(result.focusSource).toBe(FocusSource.Script)
  expect(result.focusVersion).toBe(1)
})

test('focusFind - requests focus again if already focused', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
    focusVersion: 2,
  }
  const result = FindWidgetFocusFind.focusFind(state)
  expect(result.focus).toBe(WhenExpression.FocusSearchInput)
  expect(result.focusVersion).toBe(3)
})
