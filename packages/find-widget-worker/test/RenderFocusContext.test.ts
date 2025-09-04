import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.js'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.js'

test('renderFocusContext', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  const result = renderFocusContext(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget])
})
