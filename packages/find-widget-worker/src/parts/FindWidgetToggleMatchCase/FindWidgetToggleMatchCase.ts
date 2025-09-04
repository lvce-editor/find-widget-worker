import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const toggleMatchCase = (state: FindWidgetState): FindWidgetState => {
  const { matchCase } = state
  // TODO update search results
  return {
    ...state,
    matchCase: !matchCase,
  }
}
