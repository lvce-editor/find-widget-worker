import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleBlur } from '../src/parts/FindWidgetHandleBlur/FindWidgetHandleBlur.ts'

test('handleBlur should set focus to 0 and focused to false', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    focus: 1,
    focused: true,
  }

  const newState = await handleBlur(state)

  expect(newState.focus).toBe(0)
  expect(newState.focused).toBe(false)
})
