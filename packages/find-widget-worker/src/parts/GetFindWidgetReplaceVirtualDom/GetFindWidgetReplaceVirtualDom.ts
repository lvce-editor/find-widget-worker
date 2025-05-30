import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getFindWidgetReplaceVirtualDom = (replaceExpanded: boolean, replaceButtons: readonly FindWidgetButton[]): readonly VirtualDomNode[] => {
  const dom: VirtualDomNode[] = []
  if (replaceExpanded) {
    dom.push(
      {
        type: VirtualDomElements.Div,
        className: ClassNames.FindWidgetReplace,
        childCount: 1 + replaceButtons.length,
      },
      ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
        InputName.ReplaceValue,
        FindStrings.replace(),
        DomEventListenerFunctions.HandleReplaceInput,
        [],
        [],
        DomEventListenerFunctions.HandleReplaceFocus,
      ),
      ...replaceButtons.flatMap(GetIconButtonVirtualDom.getIconButtonVirtualDom),
    )
  }
  return dom
}
