import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { focusElement } from '../FocusElement/FocusElement.ts'
import { getNextFocus } from '../GetNextFocus/GetNextFocus.ts'

export const focusNextElement = (state: FindWidgetState): FindWidgetState => {
  const { focus, replaceExpanded } = state
  const nextFocus = getNextFocus(focus, replaceExpanded)
  return focusElement(state, nextFocus)
}
