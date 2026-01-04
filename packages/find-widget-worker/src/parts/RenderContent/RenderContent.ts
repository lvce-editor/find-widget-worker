import { WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { focus, inputErrorMessage, matchCase, matchCount, matchWholeWord, preserveCase, replaceExpanded, uid, useRegularExpression, value } =
    newState
  const matchCountText = GetMatchCountText.getMatchCountText(newState.matchIndex, newState.matchCount)
  const { findButtonsEnabled, replaceButtonsEnabled } = GetFindWidgetButtonsEnabled.getFindWidgetButtonsEnabled(matchCount, value)
  const { findButtons, findFieldButtons, replaceButtons, replaceFieldButtons } = GetFindWidgetButtons.getFindWidgetButtons(
    findButtonsEnabled,
    replaceButtonsEnabled,
    matchCase,
    matchWholeWord,
    useRegularExpression,
    preserveCase,
  )
  const hasError = Boolean(inputErrorMessage)
  const inputFocused = focus === WhenExpression.FocusSearchInput
  const replaceInputFocused = focus === WhenExpression.FocusSearchReplaceInput
  const dom = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    matchCountText,
    replaceExpanded,
    findButtons,
    findFieldButtons,
    replaceButtons,
    replaceFieldButtons,
    matchCount,
    value,
    hasError,
    inputFocused,
    replaceInputFocused,
  )
  return [RenderMethod.SetDom2, uid, dom]
}
