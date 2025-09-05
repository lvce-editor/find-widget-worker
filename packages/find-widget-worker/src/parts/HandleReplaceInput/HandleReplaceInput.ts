import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as MaybeMeasureDynamicHeight from '../MaybeMeasureDynamicHeight/MaybeMeasureDynamicHeight.ts'

export const handleReplaceInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  const result: FindWidgetState = {
    ...state,
    replacement: value,
    inputSource,
  }
  MaybeMeasureDynamicHeight.schedule(result)
  return result
}
