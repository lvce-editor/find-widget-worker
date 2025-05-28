import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return (
    oldState.version === newState.version &&
    oldState.replaceExpanded === newState.replaceExpanded &&
    oldState.matchCount === newState.matchCount &&
    oldState.matchIndex === newState.matchIndex
  )
}
