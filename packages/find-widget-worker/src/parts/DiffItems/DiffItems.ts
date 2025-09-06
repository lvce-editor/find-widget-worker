import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return (
    oldState.version === newState.version &&
    oldState.replaceExpanded === newState.replaceExpanded &&
    oldState.matchCount === newState.matchCount &&
    oldState.matchIndex === newState.matchIndex &&
    oldState.matchCase === newState.matchCase &&
    oldState.matchWholeWord === newState.matchWholeWord &&
    oldState.useRegularExpression === newState.useRegularExpression &&
    oldState.preserveCase === newState.preserveCase
  )
}
