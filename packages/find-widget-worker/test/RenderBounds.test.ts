import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderBounds } from '../src/parts/RenderBounds/RenderBounds.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderBounds returns correct array with bounds', () => {
  const oldState: FindWidgetState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    x: 100,
    y: 200,
    width: 300,
    height: 400,
    uid: 1,
  }

  const result = renderBounds(oldState, newState)

  expect(result).toEqual([RenderMethod.SetBounds, 1, 100, 200, 300, 400])
})
