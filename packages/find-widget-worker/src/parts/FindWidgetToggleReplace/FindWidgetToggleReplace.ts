import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetHeight from '../GetFindWidgetHeight/GetFindWidgetHeight.ts'
import * as MaybeMeasureDynamicHeight from '../MaybeMeasureDynamicHeight/MaybeMeasureDynamicHeight.ts'

export const toggleReplace = (state: FindWidgetState): FindWidgetState => {
  const { replaceExpanded } = state
  const newExpanded = !replaceExpanded
  const newHeight = GetFindWidgetHeight.getFindWidgetHeight(newExpanded)
  const result: FindWidgetState = {
    ...state,
    replaceExpanded: newExpanded,
    height: newHeight,
  }
  MaybeMeasureDynamicHeight.schedule(result)
  return result
}
