import { expect, test } from '@jest/globals'
import { applyRegexReplacement } from '../src/parts/ApplyRegexReplacement/ApplyRegexReplacement.ts'

test('returns the replacement when the regular expression does not match', () => {
  expect(applyRegexReplacement('hello', /(world)/g, '$1')).toBe('$1')
})

test('replaces an unmatched optional capture group with an empty string', () => {
  expect(applyRegexReplacement('b', /(a)?b/g, '[$1]')).toBe('[]')
})

test('preserves a reference to a capture group that does not exist', () => {
  expect(applyRegexReplacement('hello', /(hello)/g, '$2')).toBe('$2')
})
