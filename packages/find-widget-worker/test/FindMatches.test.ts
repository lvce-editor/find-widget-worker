import { test, expect } from '@jest/globals'
import { findMatches } from '../src/parts/FindMatches/FindMatches.ts'

test('empty search returns empty', () => {
  const lines = ['Hello', 'world']
  const result = findMatches(lines, '', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(result).toEqual(new Uint32Array([]))
})

test('case-insensitive literal', () => {
  const lines = ['Hello', 'WORLD', 'hello world']
  const result = findMatches(lines, 'hello', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(result).toEqual(new Uint32Array([0, 0, 2, 0]))
})

test('case-sensitive literal', () => {
  const lines = ['Hello', 'hello', 'HELLO']
  const result = findMatches(lines, 'Hello', { matchCase: true, matchWholeWord: false, useRegularExpression: false })
  expect(result).toEqual(new Uint32Array([0, 0]))
})

test('whole word only', () => {
  const lines = ['foo', 'foobar foo barfoo', 'bar foo']
  const result = findMatches(lines, 'foo', { matchCase: false, matchWholeWord: true, useRegularExpression: false })
  expect(result).toEqual(new Uint32Array([0, 0, 1, 7, 2, 4]))
})

test('regex search', () => {
  const lines = ['abc123', 'xyz', '123abc123']
  const result = findMatches(lines, '[a-z]+', { matchCase: false, matchWholeWord: false, useRegularExpression: true })
  expect(result).toEqual(new Uint32Array([0, 0, 1, 0, 2, 3]))
})

test('regex with case sensitive', () => {
  const lines = ['AbC', 'abc ABC']
  const result = findMatches(lines, 'abc', { matchCase: true, matchWholeWord: false, useRegularExpression: true })
  expect(result).toEqual(new Uint32Array([1, 0]))
})

test('regex with whole word', () => {
  const lines = ['foo', 'foobar foo barfoo']
  const result = findMatches(lines, 'fo+', { matchCase: false, matchWholeWord: true, useRegularExpression: true })
  expect(result).toEqual(new Uint32Array([0, 0, 1, 7]))
})


