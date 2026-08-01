import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as HandleFindWidgetFocus from '../HandleFindWidgetFocus/HandleFindWidgetFocus.ts'

// TODO maybe use one handleFocus function with a name parameter
export const handleReplaceFocus = (state: FindWidgetState): FindWidgetState => {
  return HandleFindWidgetFocus.handleFindWidgetFocus(state, WhenExpression.FocusSearchReplaceInput)
}
