import { WhenExpression } from '@lvce-editor/constants'
import { ViewletCommand } from '@lvce-editor/constants'
import { diffTree } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

const getDom = (state: FindWidgetState): readonly any[] => {
  const { focus, inputErrorMessage, matchCase, matchCount, matchIndex, matchWholeWord, preserveCase, replaceExpanded, useRegularExpression, value } =
    state
  const matchCountText = inputErrorMessage || GetMatchCountText.getMatchCountText(matchIndex, matchCount)
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
  return dom
}

export const renderContent = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid } = newState
  const dom = getDom(newState)
  if (oldState.version === 0) {
    return [RenderMethod.SetDom2, uid, dom]
  }
  const oldDom = getDom(oldState)
  return [ViewletCommand.SetPatches, uid, diffTree(oldDom, dom)]
}
