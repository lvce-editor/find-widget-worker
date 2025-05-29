import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - empty lines', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return Promise.resolve([])
      }
      if (method === 'Editor.getLines2') {
        return Promise.resolve([])
      }
      if (method === 'Editor.getSelections2') {
        return Promise.resolve([0, 0, 0, 0])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toEqual(state)
})

test('loadContent - with content', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return Promise.resolve([])
      }
      if (method === 'Editor.getLines2') {
        return Promise.resolve(['hello world'])
      }
      if (method === 'Editor.getSelections2') {
        return Promise.resolve([0, 0, 0, 5])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result.value).toBe('hello')
  expect(result.matches).toBeInstanceOf(Uint32Array)
  expect(result.matchCount).toBe(1)
  expect(result.matchIndex).toBe(0)
  expect(result.version).toBe(1)
  expect(result.focused).toBe(true)
  expect(result.lines).toEqual(['hello world'])
  expect(result.selections).toEqual([0, 0, 0, 5])
})
