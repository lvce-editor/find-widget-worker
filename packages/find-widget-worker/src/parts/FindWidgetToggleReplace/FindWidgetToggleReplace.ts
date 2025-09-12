import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'

export const toggleReplace = (state: FindWidgetState): FindWidgetState => {
  const { replaceExpanded, value, inputLineHeight, inputPaddingBottom, inputPaddingTop, inputBorderWidth, inputGap } = state
  const newExpanded = !replaceExpanded
  const { height } = measureInputHeight(value, inputLineHeight, inputPaddingBottom, inputPaddingTop, inputBorderWidth, inputGap, newExpanded)
  return {
    ...state,
    replaceExpanded: newExpanded,
    height,
  }
}
