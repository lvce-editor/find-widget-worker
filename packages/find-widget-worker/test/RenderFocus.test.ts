import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'

test('renderFocus returns correct array', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    uid: 123,
  }

  const result = renderFocus(oldState, newState)

  expect(result).toEqual(['Viewlet.focusSelector', 123, '[name="search-value"]'])
})
