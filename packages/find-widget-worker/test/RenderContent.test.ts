import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderContent from '../src/parts/RenderContent/RenderContent.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderContent should return SetDom2 command', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'test', matchCount: 1, matchIndex: 0 }
  const result: readonly any[] = RenderContent.renderContent(oldState, newState)
  expect(result[0]).toBe(RenderMethod.SetDom2)
  expect(result[1]).toBe(newState.uid)
  expect(Array.isArray(result[2])).toBe(true)
})
