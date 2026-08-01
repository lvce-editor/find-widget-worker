import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getEventListeners } from '../src/parts/GetEventListeners/GetEventListeners.ts'

test('getEventListeners - focus reports the focused control name', () => {
  const widgetId = 42
  const result = getEventListeners(1, widgetId)

  expect(result).toContainEqual({
    name: DomEventListenerFunctions.HandleFocus,
    params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocus', 0, widgetId, EventExpression.TargetName],
  })
})
