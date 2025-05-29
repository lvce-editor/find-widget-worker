import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners should return correct array', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    uid: 1,
  }

  const result = renderEventListeners(state)

  expect(result).toEqual(['Viewlet.registerEventListeners', 1, expect.any(Array)])
})
