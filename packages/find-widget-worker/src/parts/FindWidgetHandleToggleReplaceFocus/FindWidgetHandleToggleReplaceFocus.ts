import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as HandleFindWidgetFocus from '../HandleFindWidgetFocus/HandleFindWidgetFocus.ts'

export const handleToggleReplaceFocus = (state: FindWidgetState): FindWidgetState => {
  return HandleFindWidgetFocus.handleFindWidgetFocus(state, WhenExpression.FocusToggleReplace)
}
