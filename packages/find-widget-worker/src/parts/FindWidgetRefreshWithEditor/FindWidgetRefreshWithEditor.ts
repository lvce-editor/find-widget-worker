import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'

export const refresh = (state: FindWidgetState, value: string, inputSource: number): FindWidgetState => {
  const {
    inputBorderWidth,
    inputGap,
    inputLineHeight,
    inputPaddingBottom,
    inputPaddingTop,
    lines,
    matchCase,
    matchWholeWord,
    replaceExpanded,
    useRegularExpression,
  } = state
  const options: FindMatches.FindOptions = {
    matchCase,
    matchWholeWord,
    useRegularExpression,
  }
  const { error, matches } = FindMatches.findMatches(lines, value, options)
  const { height, inputHeight } = measureInputHeight(
    value,
    inputLineHeight,
    inputPaddingBottom,
    inputPaddingTop,
    inputBorderWidth,
    inputGap,
    replaceExpanded,
  )
  if (error) {
    return {
      ...state,
      height,
      inputErrorMessage: error,
      searchInputHeight: inputHeight,
    }
  }
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    height,
    inputErrorMessage: error,
    inputSource,
    matchCount,
    matches,
    matchIndex: 0,
    searchInputHeight: inputHeight,
    value,
  }
}
