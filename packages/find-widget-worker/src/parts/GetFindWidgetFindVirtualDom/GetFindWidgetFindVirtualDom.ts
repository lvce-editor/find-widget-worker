import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetFindButtons from '../GetFindButtons/GetFindButtons.ts'
import * as GetFindMatchCountClassName from '../GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getFindWidgetFindVirtualDom = (
  matchCountText: string,
  buttons: readonly FindWidgetButton[],
  matchCount: number,
  value: string,
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 5,
    },
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
      InputName.SearchValue,
      FindStrings.find(),
      DomEventListenerFunctions.HandleInput,
      GetFindButtons.getFindButtons(),
      [],
      DomEventListenerFunctions.HandleFocus,
    ),
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, value),
      childCount: 1,
    },
    text(matchCountText),
    ...buttons.flatMap(GetIconButtonVirtualDom.getIconButtonVirtualDom),
  ]
}
