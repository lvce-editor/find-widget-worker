import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const togglePreserveCase = (state: FindWidgetState): FindWidgetState => {
  const { preserveCase } = state
  // TODO update search results
  return {
    ...state,
    preserveCase: !preserveCase,
  }
}
