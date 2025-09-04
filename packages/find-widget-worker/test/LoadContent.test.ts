import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { EditorWorker } from '@lvce-editor/rpc-registery'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - empty lines', async () => {
  const commandMap = {
    'FileSystem.readDirWithFileTypes': () => {
      return []
    },
    'Editor.getLines2': () => {
      return []
    },
    'Editor.getSelections2': () => {
      return [0, 0, 0, 0]
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toEqual(state)
})

test('loadContent - with content', async () => {
  const commandMap2 = {
    'FileSystem.readDirWithFileTypes': () => {
      return []
    },
    'Editor.getLines2': () => {
      return ['hello world']
    },
    'Editor.getSelections2': () => {
      return [0, 0, 0, 5]
    },
  }
  EditorWorker.registerMockRpc(commandMap2)

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
