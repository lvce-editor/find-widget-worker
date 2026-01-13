import { expect, test } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetHandleClickButton from '../src/parts/FindWidgetHandleClickButton/FindWidgetHandleClickButton.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('handleClickButton - toggle match case', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchCase: false,
  }
  const newState = await FindWidgetHandleClickButton.handleClickButton(state, InputName.MatchCase)
  expect(newState.matchCase).toBe(true)
})

test('handleClickButton - toggle match whole word', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    matchWholeWord: false,
  }
  const newState = await FindWidgetHandleClickButton.handleClickButton(state, InputName.MatchWholeWord)
  expect(newState.matchWholeWord).toBe(true)
})

test('handleClickButton - toggle preserve case', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    preserveCase: false,
  }
  const newState = await FindWidgetHandleClickButton.handleClickButton(state, InputName.PreserveCase)
  expect(newState.preserveCase).toBe(true)
})

test('handleClickButton - toggle use regular expression', async () => {
  const state: FindWidgetState = {
    ...createDefaultState(),
    useRegularExpression: false,
  }
  const newState = await FindWidgetHandleClickButton.handleClickButton(state, InputName.UseRegularExpression)
  expect(newState.useRegularExpression).toBe(true)
})

test('handleClickButton - throws on unknown button name', async () => {
  const state = createDefaultState()
  await expect(FindWidgetHandleClickButton.handleClickButton(state, 'unknown')).rejects.toThrow('unexpected click')
})
