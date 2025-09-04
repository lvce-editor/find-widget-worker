import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { applyEdits } from '../src/parts/ApplyEdits/ApplyEdits.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'

test('applyEdits - forwards to Editor.applyEdit', async () => {
  let received: any[] | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return []
      }
      if (method === 'Editor.applyEdit2') {
        received = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  await applyEdits(1, [
    {
      start: { rowIndex: 0, columnIndex: 0 },
      end: { rowIndex: 0, columnIndex: 3 },
      inserted: ['baz'],
      deleted: ['foo'],
      origin: 'find-widget.replace',
    },
  ])

  expect(received).toEqual([
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
