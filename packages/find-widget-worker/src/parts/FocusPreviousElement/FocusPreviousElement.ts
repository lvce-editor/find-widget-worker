import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { focusElement } from '../FocusElement/FocusElement.ts'
import { getPreviousFocus } from '../GetPreviousFocus/GetPreviousFocus.ts'

export const focusPreviousElement = (state: FindWidgetState): FindWidgetState => {
  const { focus, replaceExpanded } = state
  const previousFocus = getPreviousFocus(focus, replaceExpanded)
  return focusElement(state, previousFocus)
}
