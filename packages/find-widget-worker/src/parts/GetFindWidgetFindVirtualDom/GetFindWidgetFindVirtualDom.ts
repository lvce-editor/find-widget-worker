import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetFindMatchCountClassName from '../GetFindMatchCountClassName/GetFindMatchCountClassName.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getFindWidgetFindVirtualDom = (matchCountText: string, buttons: readonly FindWidgetButton[], matchCount: number, value: string) => {
  const dom = []
  dom.push({
    type: VirtualDomElements.Div,
    className: ClassNames.FindWidgetFind,
    childCount: 5,
  })
  dom.push(
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
      InputName.SearchValue,
      FindStrings.find(),
      DomEventListenerFunctions.HandleInput,
      [],
      [],
      DomEventListenerFunctions.HandleFocus,
    ),
  )
  const findClassName = GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, value)
  dom.push(
    {
      type: VirtualDomElements.Div,
      className: findClassName,
      childCount: 1,
    },
    text(matchCountText),
    ...buttons.flatMap(GetIconButtonVirtualDom.getIconButtonVirtualDom),
  )
  return dom
}
