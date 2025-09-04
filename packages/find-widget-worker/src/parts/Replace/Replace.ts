import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const replace = (state: FindWidgetState): FindWidgetState => {
  return {
    ...state,
  }
}
