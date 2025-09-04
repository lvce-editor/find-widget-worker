import { test, expect } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderValue from '../src/parts/RenderValue/RenderValue.ts'

test('renderValue should return setValueByName command', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, value: 'test' }
  const result: readonly any[] = RenderValue.renderValue(oldState, newState)
  expect(result[0]).toBe(ViewletCommand.SetValueByName)
  expect(result[1]).toBe(newState.uid)
  expect(result[2]).toBe(InputName.SearchValue)
  expect(result[3]).toBe('test')
})
