import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'
import * as MaybeMeasureDynamicHeight from '../MaybeMeasureDynamicHeight/MaybeMeasureDynamicHeight.ts'

export const handleInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  const result = FindWidgetRefresh.refresh(state, value, inputSource)
  MaybeMeasureDynamicHeight.schedule(result)
  return result
}
