import { test, expect } from '@jest/globals'
import { getCommandIds } from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds returns all command IDs', () => {
  const commandIds = getCommandIds()
  expect(commandIds).toBeDefined()
})
