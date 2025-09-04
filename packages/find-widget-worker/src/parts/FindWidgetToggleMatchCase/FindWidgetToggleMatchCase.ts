import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'

export const toggleMatchCase = (state: FindWidgetState): FindWidgetState => {
  const { matchCase } = state
  const newState: FindWidgetState = {
    ...state,
    matchCase: !matchCase,
  }
  return FindWidgetRefresh.refresh(newState, newState.value, InputSource.User)
}
