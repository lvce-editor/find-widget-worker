import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderCss from '../src/parts/RenderCss/RenderCss.ts'

test('renderCss - returns SetCss with css vars', () => {
  const oldState = createDefaultState()
  const newState = { ...createDefaultState(), uid: 7, width: 200, height: 40, x: 10, y: 20 }
  const result = RenderCss.renderCss(oldState, newState)
  expect(result[0]).toBe(ViewletCommand.SetCss)
  expect(result[1]).toBe(7)
  const css = result[2]
  expect(css).toBe(`:root {
  --FindWidgetWidth: 200px;
  --FindWidgetHeight: 40px;
  --FindWidgetX: 10px;
  --FindWidgetY: 20px;
  --FindWidgetInputHeight: 24px;
}`)
})
