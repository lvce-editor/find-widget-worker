import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid } = newState
  const matchCountText = GetMatchCountText.getMatchCountText(newState.matchIndex, newState.matchCount)
  const { findButtonsEnabled, replaceButtonsEnabled } = GetFindWidgetButtonsEnabled.getFindWidgetButtonsEnabled(newState.matchCount, newState.value)
  const { findButtons, replaceButtons } = GetFindWidgetButtons.getFindWidgetButtons(findButtonsEnabled, replaceButtonsEnabled)
  const dom = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    matchCountText,
    newState.replaceExpanded,
    findButtons,
    replaceButtons,
    newState.matchCase,
    newState.matchWholeWord,
    newState.useRegularExpression,
    newState.matchCount,
    newState.value,
  )
  return [RenderMethod.SetDom2, uid, dom]
}
