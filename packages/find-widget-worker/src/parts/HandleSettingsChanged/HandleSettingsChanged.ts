import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFontSize from '../GetFontSize/GetFontSize.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'

export const handleSettingsChanged = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { inputBorderWidth, inputGap, inputLineHeight, inputPaddingBottom, inputPaddingTop, replaceExpanded, value } = state
  const fontSize = await GetFontSize.getFontSize()
  const { height, inputHeight } = measureInputHeight(
    value,
    inputLineHeight,
    inputPaddingBottom,
    inputPaddingTop,
    inputBorderWidth,
    inputGap,
    replaceExpanded,
    fontSize,
  )
  return {
    ...state,
    fontSize,
    height,
    searchInputHeight: inputHeight,
  }
}
