import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: FindWidgetState): SavedState => {
  const { matchCase, matchWholeWord, preserveCase, replaceExpanded, replacement, useRegularExpression, value, width } = state
  return {
    matchCase,
    matchWholeWord,
    preserveCase,
    replaceExpanded,
    replacement,
    useRegularExpression,
    value,
    width,
  }
}
