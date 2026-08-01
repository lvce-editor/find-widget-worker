import { expect, test } from '@jest/globals'
import { ViewletCommand, WhenExpression as SearchWhenExpression } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as FocusKey from '../src/parts/FocusKey/FocusKey.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.js'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.js'

test('renderFocusContext', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget])
})

test('renderFocusContext - replace input', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    focus: SearchWhenExpression.FocusSearchReplaceInput,
  }
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, SearchWhenExpression.FocusFindWidgetReplace])
})

test('renderFocusContext - replace button', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    focus: SearchWhenExpression.FocusFindWidgetReplaceButton,
  }
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, SearchWhenExpression.FocusFindWidgetReplaceButton])
})

test.each([
  SearchWhenExpression.FocusSearchMatchCase,
  SearchWhenExpression.FocusSearchPreserveCase,
  SearchWhenExpression.FocusSearchRegex,
  SearchWhenExpression.FocusSearchWholeWord,
])('renderFocusContext - find option %s', (focus) => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    focus,
  }
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, FocusKey.FocusFindWidgetOptions])
})

test('renderFocusContext - toggle replace', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    focus: SearchWhenExpression.FocusToggleReplace,
  }
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, FocusKey.FocusFindWidgetToggleReplace])
})
