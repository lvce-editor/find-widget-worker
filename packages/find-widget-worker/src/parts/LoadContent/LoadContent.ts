import { InputSource } from '@lvce-editor/constants'
import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatchesCaseInsensitive from '../FindMatchesCaseInsensitive/FindMatchesCaseInsensitive.ts'
import * as GetFindWidgetPosition from '../GetFindWidgetPosition/GetFindWidgetPosition.ts'
import * as GetLines from '../GetLines/GetLines.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import * as GetSelectedText from '../GetSelectedText/GetSelectedText.ts'
import * as GetSelections from '../GetSelections/GetSelections.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: FindWidgetState, savedState?: any): Promise<FindWidgetState> => {
  const { editorUid, editorWidth, editorX, editorY, inputLineHeight, inputPaddingBottom, inputPaddingTop, replaceExpanded } = state
  const { replacement, value } = restoreState(savedState)
  const lines = await GetLines.getLines(editorUid)
  const selections = await GetSelections.getSelections(editorUid)
  const { x, y, width } = GetFindWidgetPosition.getFindWidgetPosition(editorX, editorY, editorWidth)
  if (lines.length === 0) {
    return state
  }
  const actualValue = value || GetSelectedText.getSelectedText(lines, selections)
  const matches = FindMatchesCaseInsensitive.findMatchesCaseInsensitive(lines, actualValue)
  const matchCount = GetMatchCount.getMatchCount(matches)
  const { inputHeight, height } = measureInputHeight(value, inputLineHeight, inputPaddingBottom, inputPaddingTop, replaceExpanded)
  return {
    ...state,
    focus: WhenExpression.FocusSearchInput,
    focused: true,
    height,
    inputSource: InputSource.Script,
    lines,
    matchCount,
    matches,
    matchIndex: 0,
    replacement,
    searchInputHeight: inputHeight,
    selections,
    value: actualValue,
    version: 1,
    width,
    x,
    y,
  }
}
