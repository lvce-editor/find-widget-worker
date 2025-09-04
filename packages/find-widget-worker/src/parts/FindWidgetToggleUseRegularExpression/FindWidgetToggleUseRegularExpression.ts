import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'

export const toggleUseRegularExpression = (state: FindWidgetState): FindWidgetState => {
  const { useRegularExpression } = state
  const newState: FindWidgetState = {
    ...state,
    useRegularExpression: !useRegularExpression,
  }
  return FindWidgetRefresh.refresh(newState, newState.value, InputSource.User)
}
