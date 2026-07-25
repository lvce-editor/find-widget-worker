import { expect, test } from '@jest/globals'
import * as CommandMap from '../src/parts/CommandMap/CommandMap.ts'

test('commandMap', () => {
  const { commandMap } = CommandMap
  expect(typeof commandMap).toBe('object')
  expect(commandMap['FindWidget.focusFind']).toBeDefined()
  expect(commandMap['FindWidget.focusNextMatchButton']).toBeDefined()
  expect(commandMap['FindWidget.focusPreviousMatchButton']).toBeDefined()
  expect(commandMap['FindWidget.focusReplaceButton']).toBeDefined()
  expect(commandMap['FindWidget.focusToggleReplace']).toBeDefined()
})
