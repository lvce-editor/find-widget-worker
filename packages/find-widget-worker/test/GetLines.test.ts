import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getLines } from '../src/parts/GetLines/GetLines.ts'

test('getLines', async () => {
  const mockLines = ['line1', 'line2', 'line3']
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Editor.getLines2') {
        return Promise.resolve(mockLines)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const result = await getLines(1)
  expect(result).toEqual(mockLines)
})
