import { InputSource, WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetFocusIndex from '../FindWidgetFocusIndex/FindWidgetFocusIndex.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const handleInput = async (state: FindWidgetState, value: string, inputSource = InputSource.User): Promise<FindWidgetState> => {
  const newState = FindWidgetRefresh.refresh(state, value, inputSource)
  if (inputSource !== InputSource.User) {
    return newState
  }
  const selectedState =
    newState.matchCount > 0 && !newState.inputErrorMessage ? await FindWidgetFocusIndex.focusFirst({ ...newState, matchIndex: -1 }) : newState
  return {
    ...selectedState,
    focus: WhenExpression.FocusSearchInput,
    focusSource: FocusSource.User,
  }
}
