import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const toggleUseRegularExpression = (state: FindWidgetState): FindWidgetState => {
  const { useRegularExpression } = state
  return {
    ...state,
    useRegularExpression: !useRegularExpression,
  }
}
