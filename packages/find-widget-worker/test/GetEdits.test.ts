import { test, expect } from '@jest/globals'
import * as FindRegexMatches from '../src/parts/FindRegexMatches/FindRegexMatches.ts'
import { getEdits } from '../src/parts/GetEdits/GetEdits.ts'
import * as GetSearchRegex from '../src/parts/GetSearchRegex/GetSearchRegex.ts'

test('getEdits - replace one occurrence at focused index', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = 'foo'
  const replacement: string = 'baz'
  const startIndex: number = 1
  const replaceAll: boolean = false
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  const edits = getEdits(matches, value, replacement, startIndex, replaceAll)
  expect(edits).toEqual([
    {
      start: { rowIndex: 0, columnIndex: 8 },
      end: { rowIndex: 0, columnIndex: 11 },
      inserted: ['baz'],
      deleted: ['foo'],
      origin: 'find-widget.replace',
    },
  ])
})

test('getEdits - replace all occurrences', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = 'foo'
  const replacement: string = 'baz'
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  const edits = getEdits(matches, value, replacement, 0, true)
  expect(edits).toEqual([
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
  ])
})

test('getEdits - no value returns empty edits', () => {
  const value: string = ''
  const replacement: string = 'baz'
  const matches: Uint32Array = new Uint32Array([])
  const edits = getEdits(matches, value, replacement, 0, true)
  expect(edits).toEqual([])
})
