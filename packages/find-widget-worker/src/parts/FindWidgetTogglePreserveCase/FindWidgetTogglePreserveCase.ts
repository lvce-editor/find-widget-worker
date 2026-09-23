import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'

export const togglePreserveCase = (state: FindWidgetState): FindWidgetState => {
  const { preserveCase } = state
  const newState: FindWidgetState = {
    ...state,
    preserveCase: !preserveCase,
  }
  return FindWidgetRefresh.refresh(newState, newState.value, InputSource.User)
}
