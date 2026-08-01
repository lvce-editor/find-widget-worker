import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getFindWidgetFocusKey } from '../GetFindWidgetFocusKey/GetFindWidgetFocusKey.ts'
import * as HandleFindWidgetFocus from '../HandleFindWidgetFocus/HandleFindWidgetFocus.ts'

export const handleFindFocus = (state: FindWidgetState, name: string): FindWidgetState => {
  const focusKey = getFindWidgetFocusKey(name)
  return HandleFindWidgetFocus.handleFindWidgetFocus(state, focusKey)
}
