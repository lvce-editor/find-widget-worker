import { expect, test } from '@jest/globals'
import { InputSource, WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusNextElement from '../src/parts/FocusNextElement/FocusNextElement.ts'

test('focusNextElement - from search input with replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
    replaceExpanded: true,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchReplaceInput)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from search input without replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
    replaceExpanded: false,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchMatchCase)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from match case', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchMatchCase,
    replaceExpanded: false,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchWholeWord)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from whole word', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchWholeWord,
    replaceExpanded: false,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchRegex)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from regex with replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchRegex,
    replaceExpanded: true,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchPreserveCase)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from regex without replace expanded', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchRegex,
    replaceExpanded: false,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusFindWidgetCloseButton)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from replace input', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchReplaceInput,
    replaceExpanded: true,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchMatchCase)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from preserve case', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchPreserveCase,
    replaceExpanded: true,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusSearchReplaceAll)
  expect(newState.focusSource).toBe(InputSource.Script)
})

test('focusNextElement - from replace all', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchReplaceAll,
    replaceExpanded: true,
  }
  const newState = FocusNextElement.focusNextElement(state)
  expect(newState.focus).toBe(WhenExpression.FocusToggleDetails)
  expect(newState.focusSource).toBe(InputSource.Script)
})
