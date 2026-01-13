import { expect, test } from '@jest/globals'
import { InputSource, WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusPreviousElement from '../src/parts/FocusPreviousElement/FocusPreviousElement.ts'

test('focusPreviousElement - from match case with replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchMatchCase,
    replaceExpanded: true,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchReplaceInput)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from match case without replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchMatchCase,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchInput)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from search input', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusToggleReplace)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from whole word', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchWholeWord,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchMatchCase)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from regex', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchRegex,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchWholeWord)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from toggle details with replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusToggleDetails,
    replaceExpanded: true,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchReplaceAll)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from toggle details without replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusToggleDetails,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchRegex)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from close button', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusFindWidgetCloseButton,
    replaceExpanded: false,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchRegex)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - from replace input', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchReplaceInput,
    replaceExpanded: true,
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchInput)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusPreviousElement - preserves other state properties', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchWholeWord,
    matchCase: true,
    replaceExpanded: false,
    value: 'test search',
  }
  const newState = FocusPreviousElement.focusPreviousElement(state)
  expect(newState.value).toBe('test search')
  expect(newState.matchCase).toBe(true)
})
