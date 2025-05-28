import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { type FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as FindWidgetToggleReplace from '../src/parts/FindWidgetToggleReplace/FindWidgetToggleReplace.ts'

test('expand', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    replaceExpanded: false,
  }
  const newState = FindWidgetToggleReplace.toggleReplace(state)
  expect(newState.replaceExpanded).toBe(true)
  expect(newState.height).toBe(60)
})

test('collapse', () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    replaceExpanded: true,
  }
  const newState = FindWidgetToggleReplace.toggleReplace(state)
  expect(newState.replaceExpanded).toBe(false)
  expect(newState.height).toBe(30)
})
