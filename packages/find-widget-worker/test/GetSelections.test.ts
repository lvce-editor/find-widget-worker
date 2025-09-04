import { expect, test } from '@jest/globals'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { getSelections } from '../src/parts/GetSelections/GetSelections.ts'

test('getSelections', async () => {
  const mockSelections = [1, 2, 3]
  const commandMap = {
    'Editor.getSelections2': () => {
      return mockSelections
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const result = await getSelections(1)
  expect(result).toEqual(mockSelections)
})
