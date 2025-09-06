import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getNextFocus } from '../GetNextFocus/GetNextFocus.ts'

export const focusNextElement = (state: FindWidgetState): FindWidgetState => {
  const { focus, replaceExpanded } = state
  const nextFocus = getNextFocus(focus, replaceExpanded)
  return {
    ...state,
    focus: nextFocus,
    focusSource: InputSource.Script,
  }
}
