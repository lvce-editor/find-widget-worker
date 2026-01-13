import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindRegexMatches from '../src/parts/FindRegexMatches/FindRegexMatches.ts'
import * as GetSearchRegex from '../src/parts/GetSearchRegex/GetSearchRegex.ts'
import { replaceAll } from '../src/parts/ReplaceAll/ReplaceAll.ts'

const createState = (lines: readonly string[], value: string, replacement: string): FindWidgetState => {
  const base = createDefaultState()
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  return {
    ...base,
    editorUid: 1,
    lines,
    matchCount: Math.floor(matches.length / 3),
    matches,
    matchIndex: 0,
    replacement,
    value,
  }
}

test('replaceAll - applies edits for all matches', async () => {
  const newLines = ['baz bar baz', 'bar baz']
  const commandMap = {
    'Editor.applyDocumentEdits': (): undefined => {
      return undefined
    },
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  const mockRpc = EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo', 'bar foo'], 'foo', 'baz')
  await replaceAll(state)

  expect(mockRpc.invocations[0]).toEqual([
    'Editor.applyDocumentEdits',
    1,
    [
      {
        endOffset: 3,
        inserted: 'baz',
        origin: 'find-widget.replace',
        startOffset: 0,
      },
      {
        endOffset: 11,
        inserted: 'baz',
        origin: 'find-widget.replace',
        startOffset: 8,
      },
      {
        endOffset: 19,
        inserted: 'baz',
        origin: 'find-widget.replace',
        startOffset: 16,
      },
    ],
  ])
})

test('replaceAll - updates lines after replacement', async () => {
  const newLines = ['baz bar baz', 'bar baz']
  const commandMap = {
    'Editor.applyDocumentEdits': (): undefined => {
      return undefined
    },
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo', 'bar foo'], 'foo', 'baz')
  const result = await replaceAll(state)

  expect(result.lines).toEqual(newLines)
  expect(result.matchCount).toBe(0)
  expect(result.matchIndex).toBe(0)
})
