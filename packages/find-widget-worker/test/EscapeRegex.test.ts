import { expect, test } from '@jest/globals'
import * as EscapeRegex from '../src/parts/EscapeRegex/EscapeRegex.ts'

test('empty', () => {
  const regex: string = ''
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe('')
})

test('character', () => {
  const regex: string = 'a'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe('\\x61')
})

test('slash', () => {
  const regex: string = '/'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe('\\/')
})

test('backslash', () => {
  const regex: string = '\\'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe('\\\\')
})

test('open curly brace', () => {
  const regex: string = '{'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\{`)
})

test('close curly brace', () => {
  const regex: string = '}'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\}`)
})

test('star', () => {
  const regex: string = '*'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\*`)
})

test('plus', () => {
  const regex: string = '+'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\+`)
})

test('question mark', () => {
  const regex: string = '?'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\?`)
})

test('pipe', () => {
  const regex: string = '|'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\|`)
})

test('caret', () => {
  const regex: string = '^'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\^`)
})

test('dollar', () => {
  const regex: string = '$'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\$`)
})

test('dot', () => {
  const regex: string = '.'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\.`)
})

test('square open', () => {
  const regex: string = '['
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\[`)
})

test('square close', () => {
  const regex: string = ']'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\]`)
})

test('round open', () => {
  const regex: string = '('
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\(`)
})

test('round close', () => {
  const regex: string = ')'
  expect(EscapeRegex.escapeRegExpCharacters(regex)).toBe(String.raw`\)`)
})
