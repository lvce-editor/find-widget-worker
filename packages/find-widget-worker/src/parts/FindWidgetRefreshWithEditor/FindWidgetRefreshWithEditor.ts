import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'

export const refresh = (state: FindWidgetState, value: string, inputSource: number): FindWidgetState => {
  const { lines, matchCase, useRegularExpression, matchWholeWord } = state
  const options: FindMatches.FindOptions = {
    matchCase,
    useRegularExpression,
    matchWholeWord,
  }
  const { matches, error } = FindMatches.findMatches(lines, value, options)
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    inputErrorMessage: error,
    inputSource,
    matchCount,
    matches,
    matchIndex: 0,
    value,
  }
}
