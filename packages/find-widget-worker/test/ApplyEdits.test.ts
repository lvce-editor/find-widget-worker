import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { applyEdits } from '../src/parts/ApplyEdits/ApplyEdits.ts'

test('applyEdits - forwards to Editor.applyEdit', async () => {
  const commandMap = {
    'Editor.applyDocumentEdits': (): undefined => {
      return undefined
    },
  }
  const mockRpc = EditorWorker.registerMockRpc(commandMap)

  await applyEdits(1, [
    {
      start: { rowIndex: 0, columnIndex: 0 },
      end: { rowIndex: 0, columnIndex: 3 },
      inserted: ['baz'],
      deleted: ['foo'],
      origin: 'find-widget.replace',
    },
  ])

  expect(mockRpc.invocations[0]).toEqual([
    'Editor.applyDocumentEdits',
    1,
    [
      {
        start: { rowIndex: 0, columnIndex: 0 },
        end: { rowIndex: 0, columnIndex: 3 },
        inserted: ['baz'],
        deleted: ['foo'],
        origin: 'find-widget.replace',
      },
    ],
  ])
})
