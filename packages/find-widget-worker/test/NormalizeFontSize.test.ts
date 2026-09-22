import { expect, test } from '@jest/globals'
import * as NormalizeFontSize from '../src/parts/NormalizeFontSize/NormalizeFontSize.ts'

test.each([
  [undefined, 'inherit'],
  [0, 'inherit'],
  ['invalid', 'inherit'],
  [NaN, 'inherit'],
  [Infinity, 'inherit'],
  [-1, 10],
  [30, 30],
  [1000, 100],
])('normalizeFontSize(%p) returns %p', (value, expected) => {
  expect(NormalizeFontSize.normalizeFontSize(value)).toBe(expected)
})
