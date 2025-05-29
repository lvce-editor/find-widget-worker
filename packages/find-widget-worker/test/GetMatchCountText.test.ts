import { test, expect } from '@jest/globals'
import * as FindStrings from '../src/parts/FindStrings/FindStrings.ts'
import { getMatchCountText } from '../src/parts/GetMatchCountText/GetMatchCountText.ts'

test('getMatchCountText returns no results text when count is 0', () => {
  const result = getMatchCountText(0, 0)
  expect(result).toBe(FindStrings.noResults())
})

test('getMatchCountText returns match count text when count is greater than 0', () => {
  const result = getMatchCountText(2, 5)
  expect(result).toBe(FindStrings.matchOf(3, 5))
})
