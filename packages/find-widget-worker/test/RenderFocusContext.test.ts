import { expect, test } from '@jest/globals'
import { ViewletCommand, WhenExpression as SearchWhenExpression } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
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
