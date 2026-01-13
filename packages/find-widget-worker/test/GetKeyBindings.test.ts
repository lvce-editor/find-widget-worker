import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings - returns an array of key bindings', () => {
  const result = GetKeyBindings.getKeyBindings()
  expect(result).toBeDefined()
})
