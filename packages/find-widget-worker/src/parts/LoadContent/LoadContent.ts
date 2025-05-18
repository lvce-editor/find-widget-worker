import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const loadContent = (state: FindWidgetState): FindWidgetState => {
  return {
    ...state,
    version: 1,
  }
}
