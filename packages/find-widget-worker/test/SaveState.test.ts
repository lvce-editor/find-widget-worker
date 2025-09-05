import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SaveState from '../src/parts/SaveState/SaveState.ts'

test('saveState - picks subset of fields', () => {
  const base = createDefaultState()
  const state = {
    ...base,
    width: 512,
    value: 'abc',
    replacement: 'x',
    matchCase: true,
    matchWholeWord: true,
    useRegularExpression: true,
    replaceExpanded: true,
  }
  const saved = SaveState.saveState(state)
  expect(saved).toEqual({
    width: 512,
    value: 'abc',
    replacement: 'x',
    matchCase: true,
    matchWholeWord: true,
    useRegularExpression: true,
    replaceExpanded: true,
  })
})
