import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as SetFindWidgetFocus from '../SetFindWidgetFocus/SetFindWidgetFocus.ts'

export const focusFind = (state: FindWidgetState): FindWidgetState => {
  const newState = SetFindWidgetFocus.setFindWidgetFocus(state, WhenExpression.FocusSearchInput)
  return {
    ...newState,
    focusVersion: state.focusVersion + 1,
  }
}
