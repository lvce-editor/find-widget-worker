import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const handleFindWidgetFocus = (state: FindWidgetState, focusKey: number): FindWidgetState => {
  const { focus } = state
  if (!focusKey || focus === focusKey) {
    return state
  }
  return {
    ...state,
    focus: focusKey,
    focusSource: FocusSource.User,
  }
}
