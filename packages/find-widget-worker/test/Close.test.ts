import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as Close from '../src/parts/Close/Close.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { EditorWorker } from '@lvce-editor/rpc-registery'

test('close should invoke Editor.closeFind2 and return state', async () => {
  const commandMap = {
    'Editor.closeFind2': () => {
      return undefined
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = await Close.close(state)
  expect(result).toBe(state)
})
