import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindRegexMatches from '../src/parts/FindRegexMatches/FindRegexMatches.ts'
import * as GetSearchRegex from '../src/parts/GetSearchRegex/GetSearchRegex.ts'
import { replace } from '../src/parts/Replace/Replace.ts'

const createState = (lines: readonly string[], value: string, replacement: string, matchIndex: number): FindWidgetState => {
  const base = createDefaultState()
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  return {
    ...base,
    editorUid: 1,
    lines,
    matchCount: Math.floor(matches.length / 3),
    matches,
    matchIndex,
    replacement,
    value,
  }
}

test('replace - applies edit for focused match', async () => {
  const newLines = ['foo bar baz']
  const commandMap = {
    'Editor.applyDocumentEdits': (): undefined => {
      return undefined
    },
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  const mockRpc = EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo'], 'foo', 'baz', 1)
  await replace(state)

  expect(mockRpc.invocations[0]).toEqual([
    'Editor.applyDocumentEdits',
    1,
    [
      {
        endOffset: 11,
        inserted: 'baz',
        origin: 'find-widget.replace',
        startOffset: 8,
      },
    ],
  ])
})

test('replace - updates lines after replacement', async () => {
  const newLines = ['foo bar baz']
  const commandMap = {
    'Editor.applyDocumentEdits': (): undefined => {
      return undefined
    },
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo'], 'foo', 'baz', 1)
  const result = await replace(state)

  expect(result.lines).toEqual(newLines)
  expect(result.matchCount).toBe(1)
})
