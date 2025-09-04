import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { getLines } from '../src/parts/GetLines/GetLines.ts'

test('getLines', async () => {
  const mockLines = ['line1', 'line2', 'line3']
  const commandMap = {
    'Editor.getLines2': () => {
      return mockLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const result = await getLines(1)
  expect(result).toEqual(mockLines)
})
