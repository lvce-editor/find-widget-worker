import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFontSize from '../GetFontSize/GetFontSize.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'

export const handleSettingsChanged = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const fontSize = await GetFontSize.getFontSize()
  const { height, inputHeight } = measureInputHeight(
    state.value,
    state.inputLineHeight,
    state.inputPaddingBottom,
    state.inputPaddingTop,
    state.inputBorderWidth,
    state.inputGap,
    state.replaceExpanded,
    fontSize,
  )
  return {
    ...state,
    fontSize,
    height,
    searchInputHeight: inputHeight,
  }
}
