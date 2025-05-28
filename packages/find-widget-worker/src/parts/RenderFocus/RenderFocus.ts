import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const renderFocus = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid } = newState
  return [/* method */ 'Viewlet.focusSelector', uid, `[name="search-value"]`]
}
