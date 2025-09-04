import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { ViewletCommand } from '@lvce-editor/constants'

export const renderFocus = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid } = newState
  return [/* method */ ViewletCommand.FocusSelector, uid, `[name="search-value"]`]
}
