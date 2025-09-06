import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetFindWidgetFindVirtualDom from '../GetFindWidgetFindVirtualDom/GetFindWidgetFindVirtualDom.ts'
import * as GetFindWidgetReplaceVirtualDom from '../GetFindWidgetReplaceVirtualDom/GetFindWidgetReplaceVirtualDom.ts'
import { getResizerVirtualDom } from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSearchToggleButtonVirtualDom from '../GetSearchToggleButtonVirtualDom/GetSearchToggleButtonVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ViewletFind, ClassNames.ViewletFindWidget, ClassNames.FindWidget),
  childCount: 3,
  role: AriaRoles.Group,
}

export const getFindWidgetVirtualDom = (
  matchCountText: string,
  replaceExpanded: boolean,
  findButtons: readonly FindWidgetButton[],
  findFieldButtons: readonly ISearchFieldButton[],
  replaceButtons: readonly FindWidgetButton[],
  replaceFieldButtons: readonly ISearchFieldButton[],
  matchCount: number,
  value: string,
  hasError: boolean,
): readonly VirtualDomNode[] => {
  return [
    parentNode,
    ...getResizerVirtualDom(),
    ...GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(replaceExpanded, 'handleClickToggleReplace'),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetRight,
      childCount: replaceExpanded ? 2 : 1,
    },
    ...GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, findButtons, findFieldButtons, matchCount, Boolean(value), hasError),
    ...GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(replaceExpanded, replaceButtons, replaceFieldButtons),
  ]
}
