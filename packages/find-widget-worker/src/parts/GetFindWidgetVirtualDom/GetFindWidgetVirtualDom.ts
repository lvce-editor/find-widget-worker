import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetFindWidgetFindVirtualDom from '../GetFindWidgetFindVirtualDom/GetFindWidgetFindVirtualDom.ts'
import * as GetFindWidgetReplaceVirtualDom from '../GetFindWidgetReplaceVirtualDom/GetFindWidgetReplaceVirtualDom.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSearchToggleButtonVirtualDom from '../GetSearchToggleButtonVirtualDom/GetSearchToggleButtonVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getFindWidgetVirtualDom = (
  matchCountText: string,
  replaceExpanded: boolean,
  findButtons: readonly FindWidgetButton[],
  replaceButtons: readonly FindWidgetButton[],
  matchCase: boolean,
  matchWholeWord: boolean,
  useRegularExpression: boolean,
  matchCount: number,
  value: string,
): readonly VirtualDomNode[] => {
  const dom: VirtualDomNode[] = []
  dom.push({
    type: VirtualDomElements.Div,
    className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ViewletFind, ClassNames.ViewletFindWidget, ClassNames.FindWidget),
    childCount: 3,
    role: AriaRoles.Group,
  })
  dom.push(...getResizerVirtualDom())
  dom.push(...GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(replaceExpanded, 'handleClickToggleReplace'))
  dom.push({
    type: VirtualDomElements.Div,
    className: ClassNames.FindWidgetRight,
    childCount: replaceExpanded ? 2 : 1,
  })
  dom.push(...GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, findButtons, matchCount, value))
  if (replaceExpanded) {
    dom.push(...GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(replaceExpanded, replaceButtons))
  }
  return dom
}
