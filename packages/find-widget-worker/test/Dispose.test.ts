import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as Create from '../src/parts/Create/Create.ts'
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

test('disposeInstance is idempotent and only disposes the matching instance', () => {
  Create.createInstance('editor:2:find:1', 3, 0, 0, 800, 600, 2)
  Create.createInstance('editor:2:find:2', 4, 0, 0, 800, 600, 2)

  Dispose.disposeInstance('editor:2:find:1')
  Dispose.disposeInstance('editor:2:find:1')

  expect(FindWidgetStates.get(3)).toBeUndefined()
  expect(FindWidgetStates.get(4)).toBeDefined()
  expect(FindWidgetStates.resolveUid('editor:2:find:1')).toBeUndefined()
  expect(FindWidgetStates.resolveUid('editor:2:find:2')).toBe(4)
})
