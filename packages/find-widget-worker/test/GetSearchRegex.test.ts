import { test, expect } from '@jest/globals'
import { getSearchRegex } from '../src/parts/GetSearchRegex/GetSearchRegex.ts'

test('getSearchRegex', () => {
  const regex = getSearchRegex('test')
  expect(regex.flags).toBe('gi')
  expect(regex.test('TEST')).toBe(true)
  expect(regex.test('test')).toBe(true)
  expect(regex.test('Test')).toBe(true)
  expect(regex.test('other')).toBe(false)
})

test('getSearchRegex with special characters', () => {
  const regex = getSearchRegex('test.*')
  expect(regex.test('test.*')).toBe(true)
  expect(regex.test('test.other')).toBe(false)
})

test('getSearchRegex with multiple matches', () => {
  const regex = getSearchRegex('test')
  const matches = 'test test TEST'.match(regex)
  expect(matches).toHaveLength(3)
})
