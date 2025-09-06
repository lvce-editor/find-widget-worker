import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getPreviousFocus } from '../GetPreviousFocus/GetPreviousFocus.ts'

export const focusPreviousElement = (state: FindWidgetState): FindWidgetState => {
  const { focus, replaceExpanded } = state
  const previousFocus = getPreviousFocus(focus, replaceExpanded)
  return {
    ...state,
    focus: previousFocus,
    focusSource: InputSource.Script,
  }
}
