import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'
import * as Render2 from '../src/parts/Render2/Render2.ts'

test('render2 should return commands', () => {
  const uid: number = 1
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'test' }
  FindWidgetStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderContent]
  const result: readonly any[] = Render2.render2(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
})
