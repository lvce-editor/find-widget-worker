import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'

test('renderUid', () => {
  const oldState: FindWidgetState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    uid: 123,
    editorUid: 456,
  }
  const result = RenderUid.renderUid(oldState, newState)
  expect(result).toEqual([RenderMethod.SetUid, 123, 456])
})
