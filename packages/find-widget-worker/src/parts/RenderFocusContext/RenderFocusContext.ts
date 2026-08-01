import { ViewletCommand, WhenExpression as SearchWhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const renderFocusContext = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { focus } = newState
  if (focus === SearchWhenExpression.FocusSearchReplaceInput) {
    return [/* method */ ViewletCommand.SetFocusContext, SearchWhenExpression.FocusFindWidgetReplace]
  }
  if (focus === SearchWhenExpression.FocusSearchInput || !focus) {
    return [/* method */ ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget]
  }
  return [/* method */ ViewletCommand.SetFocusContext, focus]
}
