import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getClickHandler } from '../GetClickHandler/GetClickHandler.ts'
import { getFindWidgetFocusKey } from '../GetFindWidgetFocusKey/GetFindWidgetFocusKey.ts'
import * as HandleFindWidgetFocus from '../HandleFindWidgetFocus/HandleFindWidgetFocus.ts'

export const handleClickButton = async (state: FindWidgetState, name: string): Promise<FindWidgetState> => {
  const fn = getClickHandler(name)
  const newState = await fn(state)
  const focusKey = getFindWidgetFocusKey(name)
  return HandleFindWidgetFocus.handleFindWidgetFocus(newState, focusKey)
}
