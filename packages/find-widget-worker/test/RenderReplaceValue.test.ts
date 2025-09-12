import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderReplaceValue from '../src/parts/RenderReplaceValue/RenderReplaceValue.ts'

test('renderReplaceValue - returns SetValueByName command', () => {
  const oldState: FindWidgetState = createDefaultState()
  const newState: FindWidgetState = { ...oldState, uid: 123, replacement: 'baz' }
  const result = RenderReplaceValue.renderReplaceValue(oldState, newState)
  expect(result).toEqual([ViewletCommand.SetValueByName, 123, InputName.ReplaceValue, 'baz'])
})
