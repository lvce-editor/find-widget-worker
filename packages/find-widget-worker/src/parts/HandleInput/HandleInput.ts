import { InputSource, WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const handleInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  const newState = FindWidgetRefresh.refresh(state, value, inputSource)
  if (inputSource !== InputSource.User) {
    return newState
  }
  return {
    ...newState,
    focus: WhenExpression.FocusSearchInput,
    focusSource: FocusSource.User,
  }
}
