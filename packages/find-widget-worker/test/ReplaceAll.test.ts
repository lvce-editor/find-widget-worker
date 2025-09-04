import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
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
    value,
    replacement,
    matches,
    matchIndex: 0,
    matchCount: Math.floor(matches.length / 2),
  }
}

test('replaceAll - replaces all matches', async () => {
  let received: any[] | undefined
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...args: any[]) => {
      if (method === 'FileSystem.readDirWithFileTypes') {
        return []
      }
      if (method === 'Editor.applyDocumentEdits') {
        received = args
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  const state = createState(['foo bar foo', 'bar foo'], 'foo', 'baz')
  const result = replaceAll(state)
  await Promise.resolve()

  expect(result).toEqual(state)
  expect(received).toBeDefined()
  expect(received).toEqual([
    1,
    [
      {
        start: { rowIndex: 0, columnIndex: 0 },
        end: { rowIndex: 0, columnIndex: 3 },
        inserted: ['baz'],
        deleted: ['foo'],
        origin: 'find-widget.replace',
      },
      {
        start: { rowIndex: 0, columnIndex: 8 },
        end: { rowIndex: 0, columnIndex: 11 },
        inserted: ['baz'],
        deleted: ['foo'],
        origin: 'find-widget.replace',
      },
      {
        start: { rowIndex: 1, columnIndex: 4 },
        end: { rowIndex: 1, columnIndex: 7 },
        inserted: ['baz'],
        deleted: ['foo'],
        origin: 'find-widget.replace',
      },
    ],
  ])
})
