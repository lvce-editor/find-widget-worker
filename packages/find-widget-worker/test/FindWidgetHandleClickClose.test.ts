import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleClickClose from '../src/parts/FindWidgetHandleClickClose/FindWidgetHandleClickClose.ts'

test('handleClickClose should invoke Editor.closeFind2 and return state', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Editor.closeFind2') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = await FindWidgetHandleClickClose.handleClickClose(state)
  expect(result).toBe(state)
})
