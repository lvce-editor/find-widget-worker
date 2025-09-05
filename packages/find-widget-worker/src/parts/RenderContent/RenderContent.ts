import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetButtons from '../GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as GetFindWidgetButtonsEnabled from '../GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'
import * as GetFindWidgetVirtualDom from '../GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as GetMatchCountText from '../GetMatchCountText/GetMatchCountText.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderContent = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid, matchCount, value, replaceExpanded, matchCase, matchWholeWord, useRegularExpression } = newState
  const matchCountText = GetMatchCountText.getMatchCountText(newState.matchIndex, newState.matchCount)
  const { findButtonsEnabled, replaceButtonsEnabled } = GetFindWidgetButtonsEnabled.getFindWidgetButtonsEnabled(matchCount, value)
  const { findButtons, replaceButtons } = GetFindWidgetButtons.getFindWidgetButtons(findButtonsEnabled, replaceButtonsEnabled)
  const dom = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    matchCountText,
    replaceExpanded,
    findButtons,
    replaceButtons,
    matchCase,
    matchWholeWord,
    useRegularExpression,
    matchCount,
    value,
  )
  return [RenderMethod.SetDom2, uid, dom]
}
