import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as TabIndex from '../TabIndex/TabIndex.ts'

const checkedClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonChecked)
const unCheckedClassName = ClassNames.SearchFieldButton

const getOnFocus = (name: string): number => {
  switch (name) {
    case InputName.MatchCase:
      return DomEventListenerFunctions.HandleFocusMatchCase
    case InputName.MatchWholeWord:
      return DomEventListenerFunctions.HandleFocusMatchWholeWord
    case InputName.PreserveCase:
      return DomEventListenerFunctions.HandleFocusPreserveCase
    case InputName.UseRegularExpression:
      return DomEventListenerFunctions.HandleFocusUseRegularExpression
    default:
      return DomEventListenerFunctions.HandleFocus
  }
}

export const getSearchFieldButtonVirtualDom = (button: ISearchFieldButton): readonly VirtualDomNode[] => {
  const { checked, icon, name, onClick, title } = button
  return [
    {
      ariaChecked: checked,
      childCount: 1,
      className: checked ? checkedClassName : unCheckedClassName,
      name,
      onClick,
      onFocus: getOnFocus(name),
      role: AriaRoles.CheckBox,
      tabIndex: TabIndex.Focusable,
      title,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, `MaskIcon${icon}`),
      type: VirtualDomElements.Div,
    },
  ]
}
