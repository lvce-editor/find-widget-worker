import { test, expect } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderContent from '../src/parts/RenderContent/RenderContent.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderContent should return SetDom2 command', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, matchCount: 1, matchIndex: 0, value: 'test' }
  const result: readonly any[] = RenderContent.renderContent(oldState, newState)
  expect(result[0]).toBe(RenderMethod.SetDom2)
  expect(result[1]).toBe(newState.uid)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderContent should return patches after initial rendering', () => {
  const oldState: FindWidgetState = { ...CreateDefaultState.createDefaultState(), version: 1 }
  const newState: FindWidgetState = { ...oldState, matchCount: 1, matchIndex: 0, value: 'test' }
  const result: readonly any[] = RenderContent.renderContent(oldState, newState)
  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(newState.uid)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderContent should return empty patches when the DOM is unchanged', () => {
  const state: FindWidgetState = { ...CreateDefaultState.createDefaultState(), version: 1 }
  const { uid } = state
  const result: readonly any[] = RenderContent.renderContent(state, state)
  expect(result).toEqual([ViewletCommand.SetPatches, uid, []])
})
