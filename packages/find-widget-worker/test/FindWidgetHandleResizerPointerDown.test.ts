import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleResizerPointerDown from '../src/parts/FindWidgetHandleResizerPointerDown/FindWidgetHandleResizerPointerDown.ts'

test('handleResizerPointerDown - sets resizerPointerDown to true', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    resizerPointerDown: false,
  }
  const result = await FindWidgetHandleResizerPointerDown.handleResizerPointerDown(state, 100, 200)
  expect(result).not.toBe(state)
  expect(result.resizerPointerDown).toBe(true)
})

test('handleResizerPointerDown - preserves other state properties', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: 5,
    resizerPointerDown: false,
    value: 'test',
  }
  const result = await FindWidgetHandleResizerPointerDown.handleResizerPointerDown(state, 150, 250)
  expect(result.resizerPointerDown).toBe(true)
  expect(result.focus).toBe(5)
  expect(result.value).toBe('test')
})

test('handleResizerPointerDown - updates from true to true', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    resizerPointerDown: true,
  }
  const result = await FindWidgetHandleResizerPointerDown.handleResizerPointerDown(state, 200, 300)
  expect(result).not.toBe(state)
  expect(result.resizerPointerDown).toBe(true)
})
