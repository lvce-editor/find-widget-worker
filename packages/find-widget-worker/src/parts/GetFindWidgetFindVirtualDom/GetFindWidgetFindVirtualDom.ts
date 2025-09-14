import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as GetIconButtonVirtualDom from '../GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import { getMatchCountVirtualDom } from '../GetMatchCountVirtualDom/GetMatchCountVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'

const getExtraClassName = (hasError: boolean, inputFocused: boolean): string => {
  if (hasError) {
    return ClassNames.SearchFieldError
  }
  if (inputFocused) {
    return ClassNames.SearchFieldFocused
  }
  return ''
}

export const getFindWidgetFindVirtualDom = (
  matchCountText: string,
  buttons: readonly FindWidgetButton[],
  fieldButtons: readonly ISearchFieldButton[],
  matchCount: number,
  hasValue: boolean,
  hasError: boolean,
  inputFocused: boolean,
): readonly VirtualDomNode[] => {
  const extraClassName = getExtraClassName(hasError, inputFocused)
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 2,
    },
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
      InputName.SearchValue,
      FindStrings.find(),
      DomEventListenerFunctions.HandleInput,
      fieldButtons,
      [],
      DomEventListenerFunctions.HandleFocus,
      extraClassName,
    ),
    {
      type: VirtualDomElements.Div,
      className: 'FindWidgetActions',
      childCount: 1 + buttons.length,
    },
    ...getMatchCountVirtualDom(matchCountText, matchCount, hasValue),
    ...buttons.flatMap(GetIconButtonVirtualDom.getIconButtonVirtualDom),
  ]
}
