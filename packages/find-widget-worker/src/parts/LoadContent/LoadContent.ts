import { InputSource } from '@lvce-editor/constants'
import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindMatches from '../FindMatches/FindMatches.ts'
import * as GetFindWidgetPosition from '../GetFindWidgetPosition/GetFindWidgetPosition.ts'
import * as GetFontSize from '../GetFontSize/GetFontSize.ts'
import * as GetLines from '../GetLines/GetLines.ts'
import * as GetMatchCount from '../GetMatchCount/GetMatchCount.ts'
import * as GetSelectedText from '../GetSelectedText/GetSelectedText.ts'
import * as GetSelections from '../GetSelections/GetSelections.ts'
import { measureInputHeight } from '../MeasureInputHeight/MeasureInputHeight.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: FindWidgetState, savedState?: any): Promise<FindWidgetState> => {
  const { editorUid, editorWidth, editorX, editorY, inputBorderWidth, inputGap, inputLineHeight, inputPaddingBottom, inputPaddingTop } = state
  const fontSize = await GetFontSize.getFontSize()
  const restoredState = restoreState(savedState)
  const {
    hasValue,
    matchCase,
    matchWholeWord,
    preserveCase,
    replaceExpanded,
    replacement,
    useRegularExpression,
    value,
    width: savedWidth,
  } = restoredState
  const lines = await GetLines.getLines(editorUid)
  const selections = await GetSelections.getSelections(editorUid)
  const { width: defaultWidth, x, y } = GetFindWidgetPosition.getFindWidgetPosition(editorX, editorY, editorWidth)
  if (lines.length === 0) {
    return state
  }
  const actualValue = hasValue ? value : GetSelectedText.getSelectedText(lines, selections)
  const { matches } = FindMatches.findMatches(lines, actualValue, { matchCase, matchWholeWord, useRegularExpression })
  const matchCount = GetMatchCount.getMatchCount(matches)
  let width = defaultWidth
  if (typeof savedWidth === 'number' && savedWidth > 0) {
    width = editorWidth > 0 ? Math.min(savedWidth, editorWidth) : savedWidth
  }
  const { height, inputHeight } = measureInputHeight(
    actualValue,
    inputLineHeight,
    inputPaddingBottom,
    inputPaddingTop,
    inputBorderWidth,
    inputGap,
    replaceExpanded,
    fontSize,
  )
  return {
    ...state,
    focus: WhenExpression.FocusSearchInput,
    focused: true,
    fontSize,
    height,
    inputSource: InputSource.Script,
    lines,
    matchCase,
    matchCount,
    matches,
    matchIndex: 0,
    matchWholeWord,
    preserveCase,
    replaceExpanded,
    replacement,
    searchInputHeight: inputHeight,
    selections,
    useRegularExpression,
    value: actualValue,
    version: 1,
    width,
    x,
    y,
  }
}
