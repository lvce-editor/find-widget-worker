import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as Create from '../src/parts/Create/Create.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('create should create and register state', () => {
  const uid: number = 1
  const x: number = 100
  const y: number = 200
  const width: number = 300
  const height: number = 400
  const parentUid: number = 2
  const state: FindWidgetState = Create.create(uid, x, y, width, height, parentUid)
  expect(state).toBeDefined()
  expect(FindWidgetStates.get(uid).newState).toBe(state)
})

test('createInstance registers an opaque instance id', () => {
  const state = Create.createInstance('editor:2:find:1', 3, 100, 200, 300, 400, 2)
  const { instanceId } = state

  expect(instanceId).toBe('editor:2:find:1')
  expect(FindWidgetStates.resolveUid('editor:2:find:1')).toBe(3)
  expect(FindWidgetStates.get(3).newState).toBe(state)
})
