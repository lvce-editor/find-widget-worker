import { test, expect } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('applyRender - RenderContent', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'foo', matchCount: 1, matchIndex: 0 }
  const diffResult: readonly number[] = [DiffType.RenderContent]
  const result: readonly any[] = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
  expect(result[0][0]).toBe(ViewletCommand.SetDom2)
  expect(result[0][1]).toBe(newState.uid)
})
