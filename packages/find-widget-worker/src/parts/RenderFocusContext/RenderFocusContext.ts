import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'
import { ViewletCommand } from '@lvce-editor/constants'

export const renderFocusContext = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  return [/* method */ ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget]
}
