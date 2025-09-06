import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid, matchCount, value, replaceExpanded, matchCase, matchWholeWord, useRegularExpression, preserveCase, inputErrorMessage } = newState
  const matchCountText = GetMatchCountText.getMatchCountText(newState.matchIndex, newState.matchCount)
  const { findButtonsEnabled, replaceButtonsEnabled } = GetFindWidgetButtonsEnabled.getFindWidgetButtonsEnabled(matchCount, value)
  const { findButtons, replaceButtons, findFieldButtons, replaceFieldButtons } = GetFindWidgetButtons.getFindWidgetButtons(
    findButtonsEnabled,
    replaceButtonsEnabled,
    matchCase,
    matchWholeWord,
    useRegularExpression,
    preserveCase,
  )
  const hasError = Boolean(inputErrorMessage)
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
  )
  return [RenderMethod.SetDom2, uid, dom]
}
