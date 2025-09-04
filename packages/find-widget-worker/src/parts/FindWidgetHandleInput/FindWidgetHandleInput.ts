import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  return FindWidgetRefresh.refresh(state, value, inputSource)
}
