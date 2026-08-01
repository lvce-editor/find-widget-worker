import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getEventListeners } from '../src/parts/GetEventListeners/GetEventListeners.ts'

test('getEventListeners - button clicks report the clicked control name', () => {
  const widgetId = 42
  const result = getEventListeners(1, widgetId)

  expect(result).toContainEqual({
    name: DomEventListenerFunctions.HandleClickButton,
    params: ['executeWidgetCommand', 'FindWidget', 'FindWidget.handleClickButton', 0, widgetId, EventExpression.TargetName],
  })
})
