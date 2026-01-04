import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SaveState from '../src/parts/SaveState/SaveState.ts'

test('saveState - picks subset of fields', () => {
  const base = createDefaultState()
  const state = {
    ...base,
    matchCase: true,
    matchWholeWord: true,
    replaceExpanded: true,
    replacement: 'x',
    useRegularExpression: true,
    value: 'abc',
    width: 512,
  }
  const saved = SaveState.saveState(state)
  expect(saved).toEqual({
    matchCase: true,
    matchWholeWord: true,
    replaceExpanded: true,
    replacement: 'x',
    useRegularExpression: true,
    value: 'abc',
    width: 512,
  })
})
