import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getSelections } from '../src/parts/GetSelections/GetSelections.ts'

test('getSelections', async () => {
  const mockSelections = [1, 2, 3]
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Editor.getSelections2') {
        return Promise.resolve(mockSelections)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const result = await getSelections(1)
  expect(result).toEqual(mockSelections)
})
