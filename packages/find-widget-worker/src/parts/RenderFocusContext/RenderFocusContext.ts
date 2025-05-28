import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  return [/* method */ 'Viewlet.setFocusContext', WhenExpression.FocusFindWidget]
}
