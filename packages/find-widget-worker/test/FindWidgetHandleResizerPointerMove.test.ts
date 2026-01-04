import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleResizerPointerMove from '../src/parts/FindWidgetHandleResizerPointerMove/FindWidgetHandleResizerPointerMove.ts'

test('handleResizerPointerMove - returns same state when not dragging', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    resizerPointerDown: false,
  }
  const result = await FindWidgetHandleResizerPointerMove.handleResizerPointerMove(state, 300, 0)
  expect(result).toBe(state)
})

test('handleResizerPointerMove - updates x and width while dragging (respects minWidth)', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    minWidth: 300,
    resizerPointerDown: true,
    width: 400,
    x: 100,
  }
  const result = await FindWidgetHandleResizerPointerMove.handleResizerPointerMove(state, 300, 0)
  expect(result.x).toBe(300)
  expect(result.width).toBe(300)
})

test('handleResizerPointerMove - expands beyond minWidth if dragged left', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    minWidth: 300,
    resizerPointerDown: true,
    width: 400,
    x: 100,
  }
  const result = await FindWidgetHandleResizerPointerMove.handleResizerPointerMove(state, 50, 0)
  expect(result.x).toBe(50)
  expect(result.width).toBe(450)
})
