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
  const matches = FindMatches.findMatches(lines, value, options)
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    matches,
    matchIndex: 0,
    matchCount,
    value,
    inputSource,
  }
}
