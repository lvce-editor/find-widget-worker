import { test, expect } from '@jest/globals'
import * as FindMatchesCaseInsensitive from '../src/parts/FindMatchesCaseInsensitive/FindMatchesCaseInsensitive.ts'

test('empty search string returns empty array', () => {
  const lines = ['hello', 'world']
  const result = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, '')
  expect(result).toEqual(new Uint32Array([]))
})

test('finds case insensitive matches', () => {
  const lines = ['Hello', 'WORLD', 'hello world']
  const result = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, 'hello')
  expect(result).toEqual(new Uint32Array([0, 2]))
})

test('finds multiple matches in same line', () => {
  const lines = ['hello hello', 'world']
  const result = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, 'hello')
  expect(result).toEqual(new Uint32Array([0, 0]))
})

test('no matches returns empty array', () => {
  const lines = ['hello', 'world']
  const result = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, 'xyz')
  expect(result).toEqual(new Uint32Array([]))
})
