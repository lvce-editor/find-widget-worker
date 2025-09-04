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
  expect(edits).toEqual([{ rowIndex: 0, startColumnIndex: 8, endColumnIndex: 11, newText: 'baz' }])
})

test('getEdits - replace all occurrences', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = 'foo'
  const replacement: string = 'baz'
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  const edits = getEdits(matches, value, replacement, 0, true)
  expect(edits).toEqual([
    { rowIndex: 0, startColumnIndex: 0, endColumnIndex: 3, newText: 'baz' },
    { rowIndex: 0, startColumnIndex: 8, endColumnIndex: 11, newText: 'baz' },
    { rowIndex: 1, startColumnIndex: 4, endColumnIndex: 7, newText: 'baz' },
  ])
})

test('getEdits - no value returns empty edits', () => {
  const value: string = ''
  const replacement: string = 'baz'
  const matches: Uint32Array = new Uint32Array([])
  const edits = getEdits(matches, value, replacement, 0, true)
  expect(edits).toEqual([])
})
