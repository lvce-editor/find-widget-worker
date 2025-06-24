import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Dispose from '../src/parts/Dispose/Dispose.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('dispose should dispose state', () => {
  const uid: number = 1
  const state: FindWidgetState = CreateDefaultState.createDefaultState()
  FindWidgetStates.set(uid, state, state)
  Dispose.dispose(uid)
  // After dispose, the state should not be accessible
  const disposedState = FindWidgetStates.get(uid)
  expect(disposedState).toBeUndefined()
})
