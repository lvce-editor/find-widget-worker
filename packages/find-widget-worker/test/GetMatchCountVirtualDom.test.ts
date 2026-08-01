import { expect, test } from '@jest/globals'
import { getMatchCountVirtualDom } from '../src/parts/GetMatchCountVirtualDom/GetMatchCountVirtualDom.ts'

test('omits error attributes by default', () => {
  const result = getMatchCountVirtualDom('1 match', 1, true)

  expect(result[0]).not.toHaveProperty('id')
  expect(result[0]).not.toHaveProperty('role')
})
