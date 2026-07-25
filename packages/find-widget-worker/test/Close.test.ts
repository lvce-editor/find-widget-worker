import { test, expect } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as Close from '../src/parts/Close/Close.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('close should invoke Editor.closeFind2 and return state', async () => {
  const commandMap = {
    'Editor.closeFind2': (): undefined => {
      return undefined
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  const result: FindWidgetState = await Close.close(state)
  expect(result).toBe(state)
})

test('close sends the owning instance id for instance-scoped widgets', async () => {
  let received: unknown
  using _mockRpc = EditorWorker.registerMockRpc({
    'Editor.requestFindWidgetClose': (context: unknown): void => {
      received = context
    },
  })
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    editorUid: 7,
    instanceId: 'editor:7:find:3',
  }

  await Close.close(state)

  expect(received).toEqual({
    editorUid: 7,
    instanceId: 'editor:7:find:3',
  })
})
