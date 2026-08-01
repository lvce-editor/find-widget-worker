import { test, expect } from '@jest/globals'
import { findRegexMatches } from '../src/parts/FindRegexMatches/FindRegexMatches.ts'

const helloRegex = /hello/g
const noMatchRegex = /xyz/g
const nonGlobalRegex = /hello/
const worldRegex = /world/g

test('findRegexMatches returns empty array for no matches', () => {
  const lines = ['hello', 'world']
  const result = findRegexMatches(lines, noMatchRegex)
  expect(result).toEqual(new Uint32Array([]))
})

test('findRegexMatches finds single match', () => {
  const lines = ['hello', 'world']
  const result = findRegexMatches(lines, worldRegex)
  expect(result).toEqual(new Uint32Array([1, 0, 5]))
})

test('findRegexMatches finds multiple matches in same line', () => {
  const lines = ['hello hello', 'world']
  const result = findRegexMatches(lines, helloRegex)
  expect(result).toEqual(new Uint32Array([0, 0, 5, 0, 6, 5]))
})

test('findRegexMatches finds matches across multiple lines', () => {
  const lines = ['hello', 'world', 'hello world']
  const result = findRegexMatches(lines, helloRegex)
  expect(result).toEqual(new Uint32Array([0, 0, 5, 2, 0, 5]))
})

test('findRegexMatches throws error for non-global regex', () => {
  const lines = ['hello', 'world']
  expect(() => findRegexMatches(lines, nonGlobalRegex)).toThrow('regex must be global')
})
