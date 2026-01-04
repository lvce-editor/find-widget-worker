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
  childCount: 3,
  className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.ViewletFind, ClassNames.ViewletFindWidget, ClassNames.FindWidget),
  role: AriaRoles.Group,
  type: VirtualDomElements.Div,
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
  inputFocused: boolean,
  replaceInputFocused: boolean,
): readonly VirtualDomNode[] => {
  return [
    parentNode,
    ...getResizerVirtualDom(),
    ...GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(replaceExpanded, 'handleClickToggleReplace'),
    {
      childCount: replaceExpanded ? 2 : 1,
      className: ClassNames.FindWidgetRight,
      type: VirtualDomElements.Div,
    },
    ...GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(
      matchCountText,
      findButtons,
      findFieldButtons,
      matchCount,
      Boolean(value),
      hasError,
      inputFocused,
    ),
    ...GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(replaceExpanded, replaceButtons, replaceFieldButtons, replaceInputFocused),
  ]
}
