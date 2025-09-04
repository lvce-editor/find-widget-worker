import { expect, test } from '@jest/globals'
import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleReplaceInput } from '../src/parts/HandleReplaceInput/HandleReplaceInput.ts'

test('handleReplaceInput - sets replacement and inputSource (default user)', () => {
  const state: FindWidgetState = createDefaultState()
  const result = handleReplaceInput(state, 'new-value')
  expect(result.replacement).toBe('new-value')
  expect(result.inputSource).toBe(InputSource.User)
})

test('handleReplaceInput - sets provided inputSource', () => {
  const state: FindWidgetState = createDefaultState()
  const result = handleReplaceInput(state, 'abc', InputSource.Script)
  expect(result.replacement).toBe('abc')
  expect(result.inputSource).toBe(InputSource.Script)
})
