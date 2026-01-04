import { mergeClassNames, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetSearchFieldButtonVirtualDom from '../GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.ts'

export const getSearchFieldVirtualDom = (
  name: string,
  placeholder: string,
  onInput: string,
  insideButtons: readonly ISearchFieldButton[],
  outsideButtons: readonly ISearchFieldButton[],
  onFocus: string,
  extraClassName: string,
): readonly VirtualDomNode[] => {
  const dom = [
    {
      childCount: 2,
      className: mergeClassNames(ClassNames.SearchField, extraClassName),
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      name,
      onFocus,
      onInput,
      placeholder,
      spellcheck: false,
      type: VirtualDomElements.TextArea,
    },
    {
      childCount: insideButtons.length,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
    ...insideButtons.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom),
  ]
  if (outsideButtons.length > 0) {
    throw new Error('outsideButtons are deprecated')
  }
  return dom
}
