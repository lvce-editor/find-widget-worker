import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefreshWithEditor from '../FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'

export const refresh = (state: FindWidgetState, value = state.value): FindWidgetState => {
  return FindWidgetRefreshWithEditor.refresh(state, value)
}
