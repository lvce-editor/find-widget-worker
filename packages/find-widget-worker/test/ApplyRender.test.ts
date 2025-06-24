import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

// This test checks that applyRender returns the expected command structure for RenderContent

test('applyRender - RenderContent', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'foo', matchCount: 1, matchIndex: 0 }
  const diffResult: readonly number[] = [DiffType.RenderContent]
  const result: readonly any[] = ApplyRender.applyRender(oldState, newState, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
  // The structure should be [RenderMethod.SetDom2, uid, dom], but dom is complex, so just check the method and uid
  expect(result[0][0]).toBe('Viewlet.setDom2')
  expect(result[0][1]).toBe(newState.uid)
})
