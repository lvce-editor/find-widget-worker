import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderCss from '../src/parts/RenderCss/RenderCss.ts'

test('renderCss - returns SetCss with css vars', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), height: 40, uid: 7, width: 200, x: 10, y: 20 }
  const result = RenderCss.renderCss(oldState, newState)
  expect(result).toEqual([
    ViewletCommand.SetCss,
    7,
    `:root {
  --FindWidgetWidth: 200px;
  --FindWidgetHeight: 40px;
  --FindWidgetX: 10px;
  --FindWidgetY: 20px;
  --FindWidgetInputHeight: 24px;
}`,
  ])
})
