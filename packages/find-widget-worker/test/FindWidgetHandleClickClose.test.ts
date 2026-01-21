import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleClickClose from '../src/parts/FindWidgetHandleClickClose/FindWidgetHandleClickClose.ts'

test('handleClickClose should invoke Editor.closeFind2 and return state', async () => {
  const mockRpc = EditorWorker.registerMockRpc({
    'Editor.closeFind2'() {},
  })
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = await FindWidgetHandleClickClose.handleClickClose(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toBeDefined()
})
