import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

test('loadContent - empty lines', async () => {
  const commandMap = {
    'Editor.getFindWidgetFontSize': (): any => {
      return 30
    },
    'Editor.getLines2': (): any => {
      return []
    },
    'Editor.getSelections2': (): any => {
      return [0, 0, 0, 0]
    },
    'FileSystem.readDirWithFileTypes': (): any => {
      return []
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createDefaultState()
  const result = await loadContent(state)
  expect(result).toEqual(state)
})

test('loadContent - with content', async () => {
  const commandMap2 = {
    'Editor.getFindWidgetFontSize': (): any => {
      return 30
    },
    'Editor.getLines2': (): any => {
      return ['hello world']
    },
    'Editor.getSelections2': (): any => {
      return [0, 0, 0, 5]
    },
    'FileSystem.readDirWithFileTypes': (): any => {
      return []
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
  expect(result.fontSize).toBe(30)
  expect(result.searchInputHeight).toBeGreaterThanOrEqual(30)
})

test('loadContent - restores an intentionally empty value and saved options', async () => {
  const commandMap = {
    'Editor.getFindWidgetFontSize': (): any => 30,
    'Editor.getLines2': (): any => ['hello world'],
    'Editor.getSelections2': (): any => [0, 0, 0, 5],
    'FileSystem.readDirWithFileTypes': (): any => [],
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = { ...createDefaultState(), editorWidth: 400 }
  const result = await loadContent(state, {
    matchCase: true,
    matchWholeWord: true,
    preserveCase: true,
    replaceExpanded: true,
    replacement: 'world',
    useRegularExpression: true,
    value: '',
    width: 512,
  })

  expect(result.value).toBe('')
  expect(result.matchCount).toBe(0)
  expect(result.matchCase).toBe(true)
  expect(result.matchWholeWord).toBe(true)
  expect(result.preserveCase).toBe(true)
  expect(result.replaceExpanded).toBe(true)
  expect(result.replacement).toBe('world')
  expect(result.useRegularExpression).toBe(true)
  expect(result.width).toBe(400)

  const defaultWidthResult = await loadContent(state, { value: '', width: 0 })
  expect(defaultWidthResult.width).toBe(300)

  const editorWithoutMeasuredWidth = await loadContent(createDefaultState(), { value: '', width: 512 })
  expect(editorWithoutMeasuredWidth.width).toBe(512)
})
