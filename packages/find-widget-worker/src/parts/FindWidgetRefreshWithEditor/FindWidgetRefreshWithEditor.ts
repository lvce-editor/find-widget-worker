import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatchesCaseInsensitive from '../FindMatchesCaseInsensitive/FindMatchesCaseInsensitive.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const refresh = (state: FindWidgetState, value: string): FindWidgetState => {
  const { lines } = state
  const matches = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, value)
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    matches,
    matchIndex: 0,
    matchCount,
    value,
    inputSource: InputSource.User,
  }
}
