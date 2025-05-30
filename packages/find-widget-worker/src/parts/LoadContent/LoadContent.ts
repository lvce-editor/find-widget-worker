import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatchesCaseInsensitive from '../FindMatchesCaseInsensitive/FindMatchesCaseInsensitive.ts'
import * as GetFindWidgetPosition from '../GetFindWidgetPosition/GetFindWidgetPosition.ts'
import * as GetLines from '../GetLines/GetLines.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import * as GetSelectedText from '../GetSelectedText/GetSelectedText.ts'
import * as GetSelections from '../GetSelections/GetSelections.ts'

export const loadContent = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { editorUid, editorWidth, editorX, editorY } = state
  const lines = await GetLines.getLines(editorUid)
  const selections = await GetSelections.getSelections(editorUid)
  const { x, y, width, height } = GetFindWidgetPosition.getFindWidgetPosition(editorX, editorY, editorWidth)
  if (lines.length === 0) {
    return state
  }
  const value = GetSelectedText.getSelectedText(lines, selections)
  const matches = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, value)
  const matchCount = GetMatchCount.getMatchCount(matches)
  return {
    ...state,
    value,
    matches,
    matchIndex: 0,
    matchCount,
    version: 1,
    x,
    y,
    width,
    height,
    lines,
    selections,
    focused: true,
  }
}
