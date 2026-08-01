import { expect, test } from '@jest/globals'
import { applyRegexReplacement } from '../src/parts/ApplyRegexReplacement/ApplyRegexReplacement.ts'

const helloCaptureRegex = /(hello)/g
const optionalACaptureRegex = /(a)?b/g
const worldCaptureRegex = /(world)/g

test('returns the replacement when the regular expression does not match', () => {
  expect(applyRegexReplacement('hello', worldCaptureRegex, '$1')).toBe('$1')
})

test('replaces an unmatched optional capture group with an empty string', () => {
  expect(applyRegexReplacement('b', optionalACaptureRegex, '[$1]')).toBe('[]')
})

test('preserves a reference to a capture group that does not exist', () => {
  expect(applyRegexReplacement('hello', helloCaptureRegex, '$2')).toBe('$2')
})
