import { test, expect } from '@jest/globals'
import { findRegexMatches } from '../src/parts/FindRegexMatches/FindRegexMatches.ts'

test('findRegexMatches returns empty array for no matches', () => {
  const lines = ['hello', 'world']
  const regex = /xyz/g
  const result = findRegexMatches(lines, regex)
  expect(result).toEqual(new Uint32Array([]))
})

test('findRegexMatches finds single match', () => {
  const lines = ['hello', 'world']
  const regex = /world/g
  const result = findRegexMatches(lines, regex)
  expect(result).toEqual(new Uint32Array([1, 0, 5]))
})

test('findRegexMatches finds multiple matches in same line', () => {
  const lines = ['hello hello', 'world']
  const regex = /hello/g
  const result = findRegexMatches(lines, regex)
  expect(result).toEqual(new Uint32Array([0, 0, 5, 0, 6, 5]))
})

test('findRegexMatches finds matches across multiple lines', () => {
  const lines = ['hello', 'world', 'hello world']
  const regex = /hello/g
  const result = findRegexMatches(lines, regex)
  expect(result).toEqual(new Uint32Array([0, 0, 5, 2, 0, 5]))
})

test('findRegexMatches throws error for non-global regex', () => {
  const lines = ['hello', 'world']
  const regex = /hello/
  expect(() => findRegexMatches(lines, regex)).toThrow('regex must be global')
})
