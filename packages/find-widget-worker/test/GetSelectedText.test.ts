import { expect, test } from '@jest/globals'
import * as GetSelectedText from '../src/parts/GetSelectedText/GetSelectedText.ts'

test('empty selections', () => {
  const lines: readonly string[] = ['line1', 'line2', 'line3']
  const selections: readonly number[] = []
  expect(GetSelectedText.getSelectedText(lines, selections)).toBe('')
})
