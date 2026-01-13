import { test, expect } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderValue from '../src/parts/RenderValue/RenderValue.ts'

test('renderValue should return setValueByName command', () => {
  const oldState: FindWidgetState = CreateDefaultState.createDefaultState()
  const newState: FindWidgetState = { ...oldState, uid: 1, value: 'test' }
  const result = RenderValue.renderValue(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetValueByName, 1, InputName.SearchValue, 'test'])
})
