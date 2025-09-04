import { test, expect } from '@jest/globals'
import { buildRegex } from '../src/parts/BuildRegex/BuildRegex.ts'

test('literal, case-insensitive', () => {
  const r = buildRegex('Hello', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(r.flags.includes('g')).toBe(true)
  expect(r.flags.includes('i')).toBe(true)
  expect(String(r)).toBe('/Hello/gi')
})

test('literal, case-sensitive', () => {
  const r = buildRegex('Hello', { matchCase: true, matchWholeWord: false, useRegularExpression: false })
  expect(String(r)).toBe('/Hello/g')
})

test('escapes special characters when not regex', () => {
  const r = buildRegex('a+b*c?.', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(String(r)).toBe('/a\\+b\\*c\\?\\./gi')
})

test('whole word wraps pattern with word boundaries', () => {
  const r = buildRegex('foo', { matchCase: false, matchWholeWord: true, useRegularExpression: false })
  expect(String(r)).toBe('/\\b(?:foo)\\b/gi')
})

test('regex pattern used as-is when useRegularExpression=true', () => {
  const r = buildRegex('fo+', { matchCase: false, matchWholeWord: false, useRegularExpression: true })
  expect(String(r)).toBe('/fo+/gi')
})

test('regex + whole word wraps without escaping', () => {
  const r = buildRegex('fo+', { matchCase: true, matchWholeWord: true, useRegularExpression: true })
  expect(String(r)).toBe('/\\b(?:fo+)\\b/g')
})


