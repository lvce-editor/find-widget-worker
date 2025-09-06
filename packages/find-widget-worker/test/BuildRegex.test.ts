import { test, expect } from '@jest/globals'
import { buildRegex } from '../src/parts/BuildRegex/BuildRegex.ts'

test('literal, case-insensitive flags and matching', () => {
  const { regex } = buildRegex('Hello', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect(regex.global).toBe(true)
  expect(regex.ignoreCase).toBe(true)
  expect('say hello'.match(regex)?.[0]).toBe('hello')
  expect('say Hello'.match(regex)?.[0]).toBe('Hello')
})

test('literal, case-sensitive only matches exact case', () => {
  const { regex } = buildRegex('Hello', { matchCase: true, matchWholeWord: false, useRegularExpression: false })
  expect(regex.global).toBe(true)
  expect(regex.ignoreCase).toBe(false)
  expect('say hello'.match(regex)).toBeNull()
  expect('say Hello'.match(regex)?.[0]).toBe('Hello')
})

test('escapes special characters when not regex', () => {
  const { regex } = buildRegex('a+b*c?.', { matchCase: false, matchWholeWord: false, useRegularExpression: false })
  expect('a+b*c?.'.match(regex)?.[0]).toBe('a+b*c?.')
})

test('whole word wraps pattern with word boundaries', () => {
  const { regex } = buildRegex('foo', { matchCase: false, matchWholeWord: true, useRegularExpression: false })
  expect('barfoobar'.match(regex)).toBeNull()
  expect('bar foo bar'.match(regex)?.[0]).toBe('foo')
})

test('regex pattern used as-is when useRegularExpression=true', () => {
  const { regex } = buildRegex('fo+', { matchCase: false, matchWholeWord: false, useRegularExpression: true })
  expect(String(regex)).toBe('/fo+/gi')
})

test('regex + whole word wraps without escaping', () => {
  const { regex } = buildRegex('fo+', { matchCase: true, matchWholeWord: true, useRegularExpression: true })
  expect(String(regex)).toBe('/\\b(?:fo+)\\b/g')
})

const getRegexErrorMessage = (): string => {
  // @ts-ignore
  const isBun = Boolean(process.versions.bun)
  if (isBun) {
    return 'SyntaxError: Invalid regular expression: missing )'
  }
  return `SyntaxError: Invalid regular expression: /(/gi: Unterminated group`
}

test('regex + throws error for invalid regex', () => {
  const { error } = buildRegex('(', { matchCase: false, matchWholeWord: false, useRegularExpression: true })
  expect(error).toBe(getRegexErrorMessage())
})
