import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetHeight from '../GetFindWidgetHeight/GetFindWidgetHeight.ts'

export const toggleReplace = (state: FindWidgetState): FindWidgetState => {
  const { replaceExpanded } = state
  const newExpanded = !replaceExpanded
  const newHeight = GetFindWidgetHeight.getFindWidgetHeight(newExpanded)
  return {
    ...state,
    replaceExpanded: newExpanded,
    height: newHeight,
  }
}
