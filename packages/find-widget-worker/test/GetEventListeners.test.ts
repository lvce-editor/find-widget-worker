import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getEventListeners } from '../src/parts/GetEventListeners/GetEventListeners.ts'

test('getEventListeners - match case focus reports its focus context', () => {
  const widgetId = 42
  const result = getEventListeners(1, widgetId)

  expect(result).toContainEqual({
    name: DomEventListenerFunctions.HandleFocusMatchCase,
    params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleFocusElement', 0, widgetId, WhenExpression.FocusSearchMatchCase],
  })
})
