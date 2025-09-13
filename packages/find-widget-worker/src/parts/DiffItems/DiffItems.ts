import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return (
    oldState.inputErrorMessage === newState.inputErrorMessage &&
    oldState.matchCase === newState.matchCase &&
    oldState.matchCount === newState.matchCount &&
    oldState.matchIndex === newState.matchIndex &&
    oldState.matchWholeWord === newState.matchWholeWord &&
    oldState.preserveCase === newState.preserveCase &&
    oldState.replaceExpanded === newState.replaceExpanded &&
    oldState.useRegularExpression === newState.useRegularExpression &&
    oldState.version === newState.version
  )
}
