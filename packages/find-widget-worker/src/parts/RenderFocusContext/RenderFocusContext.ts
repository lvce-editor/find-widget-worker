import { ViewletCommand, WhenExpression as SearchWhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FocusKey from '../FocusKey/FocusKey.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const optionFocusContexts: readonly number[] = [
  SearchWhenExpression.FocusSearchMatchCase,
  SearchWhenExpression.FocusSearchPreserveCase,
  SearchWhenExpression.FocusSearchRegex,
  SearchWhenExpression.FocusSearchWholeWord,
]

export const renderFocusContext = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { focus } = newState
  if (focus === SearchWhenExpression.FocusSearchReplaceInput) {
    return [/* method */ ViewletCommand.SetFocusContext, FocusKey.FocusFindWidgetReplace]
  }
  if (focus === SearchWhenExpression.FocusSearchInput || !focus) {
    return [/* method */ ViewletCommand.SetFocusContext, WhenExpression.FocusFindWidget]
  }
  if (focus === SearchWhenExpression.FocusToggleReplace) {
    return [/* method */ ViewletCommand.SetFocusContext, FocusKey.FocusFindWidgetToggleReplace]
  }
  if (optionFocusContexts.includes(focus)) {
    return [/* method */ ViewletCommand.SetFocusContext, FocusKey.FocusFindWidgetOptions]
  }
  return [/* method */ ViewletCommand.SetFocusContext, focus]
}
