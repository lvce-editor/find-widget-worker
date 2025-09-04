import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.js'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.js'
import { ViewletCommand } from '@lvce-editor/constants'

test('renderFocusContext', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget])
})
