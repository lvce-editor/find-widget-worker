import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: FindWidgetState): SavedState => {
  const { width, value, replacement, matchCase, matchWholeWord, useRegularExpression, replaceExpanded } = state
  return {
    width,
    value,
    replacement,
    matchCase,
    matchWholeWord,
    useRegularExpression,
    replaceExpanded,
  }
}
