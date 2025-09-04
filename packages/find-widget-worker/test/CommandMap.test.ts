import { expect, test } from '@jest/globals'
import * as CommandMap from '../src/parts/CommandMap/CommandMap.ts'

test('commandMap', () => {
  const { commandMap } = CommandMap
  expect(typeof commandMap).toBe('object')
})
