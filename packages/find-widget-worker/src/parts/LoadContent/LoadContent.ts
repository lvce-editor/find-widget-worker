import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatchesCaseInsensitive from '../FindMatchesCaseInsensitive/FindMatchesCaseInsensitive.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'

export const loadContent = (state: FindWidgetState): FindWidgetState => {
  // TODO query selections and lines from editor worker
  const selections: readonly number[] = []
  const lines: readonly string[] = []
  const startRowIndex = selections[0]
  const startColumnIndex = selections[1]
  const endColumnIndex = selections[3]
  const line = lines[startRowIndex]
  const value = line.slice(startColumnIndex, endColumnIndex)
  const matches = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, value)
  const matchCount = GetMatchCount.getMatchCount(matches)

  return {
    ...state,
    value,
    matches,
    matchIndex: 0,
    matchCount,
    version: 1,
  }
}
