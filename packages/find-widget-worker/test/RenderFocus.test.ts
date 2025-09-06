import { test, expect } from '@jest/globals'
import { ViewletCommand, WhenExpression } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test.skip('renderFocus returns correct array', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    uid: 123,
    focus: WhenExpression.FocusSearchInput,
  }
  const result = renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 123, '[name="search-value"]'])
})
