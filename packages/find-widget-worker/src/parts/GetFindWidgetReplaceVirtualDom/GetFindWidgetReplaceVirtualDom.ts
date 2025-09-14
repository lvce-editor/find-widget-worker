import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'

export const getFindWidgetReplaceVirtualDom = (
  replaceExpanded: boolean,
  replaceButtons: readonly FindWidgetButton[],
  replaceFieldButtons: readonly ISearchFieldButton[],
  replaceInputFocused: boolean,
): readonly VirtualDomNode[] => {
  if (!replaceExpanded) {
    return []
  }
  const extraClassName = replaceInputFocused ? ClassNames.SearchFieldFocused : ''
  return [
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
      extraClassName,
    ),
    ...replaceButtons.flatMap(GetIconButtonVirtualDom.getIconButtonVirtualDom),
  ]
}
