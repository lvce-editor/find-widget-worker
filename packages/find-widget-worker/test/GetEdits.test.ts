import { test, expect } from '@jest/globals'
import { findMatches } from '../src/parts/FindMatches/FindMatches.ts'
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
  const edits = getEdits(matches, value, replacement, startIndex, replaceAll, lines)
  expect(edits).toEqual([
    {
      endOffset: 11,
      inserted: 'baz',
      origin: 'find-widget.replace',
      startOffset: 8,
    },
  ])
})

test('getEdits - replace all occurrences', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = 'foo'
  const replacement: string = 'baz'
  const regex: RegExp = GetSearchRegex.getSearchRegex(value)
  const matches: Uint32Array = FindRegexMatches.findRegexMatches(lines, regex)
  const edits = getEdits(matches, value, replacement, 0, true, lines)
  expect(edits).toEqual([
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
  ])
})

test('getEdits - no value returns empty edits', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = ''
  const replacement: string = 'baz'
  const matches: Uint32Array = new Uint32Array([])
  const edits = getEdits(matches, value, replacement, 0, true, lines)
  expect(edits).toEqual([])
})

test('getEdits - useRegularExpression with valid regex pattern', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = 'fo+'
  const replacement: string = 'baz'
  const options = {
    matchCase: false,
    matchWholeWord: false,
    useRegularExpression: true,
  }
  const { matches } = findMatches(lines, value, options)
  const edits = getEdits(matches, value, replacement, 0, false, lines, false, options)
  expect(edits).toEqual([
    {
      endOffset: 3,
      inserted: 'baz',
      origin: 'find-widget.replace',
      startOffset: 0,
    },
  ])
})

test('getEdits - useRegularExpression with invalid regex pattern', () => {
  const lines: readonly string[] = ['foo bar foo', 'bar foo']
  const value: string = '('
  const replacement: string = 'baz'
  const options = {
    matchCase: false,
    matchWholeWord: false,
    useRegularExpression: true,
  }
  const { matches } = findMatches(lines, value, options)
  const edits = getEdits(matches, value, replacement, 0, false, lines, false, options)
  expect(edits).toEqual([])
})

test('getEdits - useRegularExpression with back-reference replacement', () => {
  const lines: readonly string[] = ['hello world', 'foo bar']
  const value: string = '(\\w+) (\\w+)'
  const replacement: string = '$2 $1'
  const options = {
    matchCase: false,
    matchWholeWord: false,
    useRegularExpression: true,
  }
  const { matches } = findMatches(lines, value, options)
  const edits = getEdits(matches, value, replacement, 0, false, lines, false, options)
  expect(edits).toEqual([
    {
      endOffset: 11,
      inserted: 'world hello',
      origin: 'find-widget.replace',
      startOffset: 0,
    },
  ])
})
