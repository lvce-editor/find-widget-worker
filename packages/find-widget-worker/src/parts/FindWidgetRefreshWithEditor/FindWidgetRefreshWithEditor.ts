import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'

export const refresh = (state: FindWidgetState, value: string, inputSource: number): FindWidgetState => {
  const { lines, matchCase, useRegularExpression, matchWholeWord, inputLineHeight, inputPaddingTop, inputPaddingBottom } = state
  const options: FindMatches.FindOptions = {
    matchCase,
    useRegularExpression,
    matchWholeWord,
  }
  const { matches, error } = FindMatches.findMatches(lines, value, options)
  const inputHeight = measureInputHeight(value, inputLineHeight, inputPaddingBottom, inputPaddingTop)
  const height = inputHeight + 5
  if (error) {
    return {
      ...state,
      inputErrorMessage: error,
      inputHeight,
      height,
    }
  }
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    inputErrorMessage: error,
    inputHeight,
    inputSource,
    matchCount,
    matches,
    matchIndex: 0,
    value,
    height,
  }
}
