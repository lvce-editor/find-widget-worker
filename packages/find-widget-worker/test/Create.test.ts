import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('create should create and register state', () => {
  const uid = 1
  const x = 100
  const y = 200
  const width = 300
  const height = 400
  const parentUid = 2
  const state = Create.create(uid, x, y, width, height, parentUid)
  expect(state).toBeDefined()
  expect(FindWidgetStates.get(uid).newState).toBe(state)
})
