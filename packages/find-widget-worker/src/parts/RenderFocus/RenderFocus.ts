import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderFocus = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { focus, uid } = newState
  const name = getFocusSelector(focus)
  const selector = `[name="${name}"]`
  return [ViewletCommand.FocusSelector, uid, selector]
}
