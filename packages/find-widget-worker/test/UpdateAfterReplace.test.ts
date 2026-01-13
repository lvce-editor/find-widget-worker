import { expect, test } from '@jest/globals'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindRegexMatches from '../src/parts/FindRegexMatches/FindRegexMatches.ts'
import * as GetSearchRegex from '../src/parts/GetSearchRegex/GetSearchRegex.ts'
import { updateAfterReplace } from '../src/parts/UpdateAfterReplace/UpdateAfterReplace.ts'

const createState = (lines: readonly string[], value: string, matchIndex: number = 0): FindWidgetState => {
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
    value,
  }
}

test('updateAfterReplace - refreshes lines and matches', async () => {
  const newLines = ['foo bar baz']
  const commandMap = {
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo'], 'foo', 0)
  const result = await updateAfterReplace(state, 0)

  expect(result.lines).toEqual(newLines)
  expect(result.matchCount).toBe(1)
  expect(result.matchIndex).toBe(0)
})

test('updateAfterReplace - clamps matchIndex when matches decrease', async () => {
  const newLines = ['baz bar foo bar foo']
  const commandMap = {
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo bar foo'], 'foo', 2)
  const result = await updateAfterReplace(state, 2)

  expect(result.matchCount).toBe(2)
  expect(result.matchIndex).toBe(1)
})

test('updateAfterReplace - resets matchIndex to 0 when no matches remain', async () => {
  const newLines = ['baz bar baz']
  const commandMap = {
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo'], 'foo', 1)
  const result = await updateAfterReplace(state, 1)

  expect(result.lines).toEqual(newLines)
  expect(result.matchCount).toBe(0)
  expect(result.matchIndex).toBe(0)
})

test('updateAfterReplace - preserves matchIndex when still valid', async () => {
  const newLines = ['foo bar foo bar foo']
  const commandMap = {
    'Editor.getLines2': (): readonly string[] => {
      return newLines
    },
  }
  EditorWorker.registerMockRpc(commandMap)

  const state = createState(['foo bar foo bar foo bar foo'], 'foo', 1)
  const result = await updateAfterReplace(state, 1)

  expect(result.matchCount).toBe(3)
  expect(result.matchIndex).toBe(1)
})
