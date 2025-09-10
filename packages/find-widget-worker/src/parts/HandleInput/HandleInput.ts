import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'

export const handleInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  return FindWidgetRefresh.refresh(state, value, inputSource)
}
