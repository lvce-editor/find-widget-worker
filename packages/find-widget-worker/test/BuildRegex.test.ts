import { test, expect } from '@jest/globals'
import { buildRegex } from '../src/parts/BuildRegex/BuildRegex.ts'

test('literal, case-insensitive flags and matching', () => {
  const r = buildRegex('Hello', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(r.global).toBe(true)
  expect(r.ignoreCase).toBe(true)
  expect('say hello'.match(r)?.[0]).toBe('hello')
  expect('say Hello'.match(r)?.[0]).toBe('Hello')
})

test('literal, case-sensitive only matches exact case', () => {
  const r = buildRegex('Hello', { matchCase: true, matchWholeWord: false, useRegularExpression: false })
  expect(r.global).toBe(true)
  expect(r.ignoreCase).toBe(false)
  expect('say hello'.match(r)).toBeNull()
  expect('say Hello'.match(r)?.[0]).toBe('Hello')
})

test('escapes special characters when not regex', () => {
  const r = buildRegex('a+b*c?.', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect('a+b*c?.'.match(r)?.[0]).toBe('a+b*c?.')
})

test('whole word wraps pattern with word boundaries', () => {
  const r = buildRegex('foo', { matchCase: false, matchWholeWord: true, useRegularExpression: false })
  expect('barfoobar'.match(r)).toBeNull()
  expect('bar foo bar'.match(r)?.[0]).toBe('foo')
})

test('regex pattern used as-is when useRegularExpression=true', () => {
  const r = buildRegex('fo+', { matchCase: false, matchWholeWord: false, useRegularExpression: true })
  expect(String(r)).toBe('/fo+/gi')
})

test('regex + whole word wraps without escaping', () => {
  const r = buildRegex('fo+', { matchCase: true, matchWholeWord: true, useRegularExpression: true })
  expect(String(r)).toBe('/\\b(?:fo+)\\b/g')
})
