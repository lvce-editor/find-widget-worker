import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import type { SavedState } from '../SavedState/SavedState.ts'

export const saveState = (state: FindWidgetState): SavedState => {
  const { width } = state
  return {
    width,
  }
}
