import type { FindOptions } from '../FindOptions/FindOptions.ts'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import { getLines } from '../GetLines/GetLines.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'

export const updateAfterReplace = async (state: FindWidgetState, matchIndex: number): Promise<FindWidgetState> => {
  const { editorUid, matchCase, matchWholeWord, useRegularExpression, value } = state
  const options: FindOptions = {
    matchCase,
    matchWholeWord,
    useRegularExpression,
  }

  const newLines = await getLines(editorUid)
  const { error, matches: newMatches } = FindMatches.findMatches(newLines, value, options)
  const newMatchCount = GetMatchCount.getMatchCount(newMatches)

  // Keep matchIndex in bounds, or reset to 0 if no matches remain
  const newMatchIndex = newMatchCount === 0 ? 0 : Math.min(matchIndex, newMatchCount - 1)

  return {
    ...state,
    inputErrorMessage: error,
    lines: newLines,
    matchCount: newMatchCount,
    matches: newMatches,
    matchIndex: newMatchIndex,
  }
}
