import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import { measureTextHeight } from '../MeasureTextHeight/MeasureTextHeight.ts'

export const refresh = (state: FindWidgetState, value: string, inputSource: number): FindWidgetState => {
  const { lines, matchCase, useRegularExpression, matchWholeWord, inputLineHeight } = state
  const options: FindMatches.FindOptions = {
    matchCase,
    useRegularExpression,
    matchWholeWord,
  }
  const { matches, error } = FindMatches.findMatches(lines, value, options)
  const inputHeight = measureTextHeight(value, inputLineHeight)
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
