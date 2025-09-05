import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetFindMatchCountClassName from '../GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getFindWidgetFindVirtualDom = (
  matchCountText: string,
  buttons: readonly FindWidgetButton[],
  fieldButtons: readonly ISearchFieldButton[],
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
      fieldButtons,
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
