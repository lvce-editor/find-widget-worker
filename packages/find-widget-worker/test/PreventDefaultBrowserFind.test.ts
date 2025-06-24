import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as PreventDefaultBrowserFind from '../src/parts/PreventDefaultBrowserFind/PreventDefaultBrowserFind.ts'

test('preventDefaultBrowserFind should return state', () => {
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = PreventDefaultBrowserFind.preventDefaultBrowserFind(state)
  expect(result).toBe(state)
})
