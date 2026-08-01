import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const getOnFocus = (name: string): number => {
  switch (name) {
    case InputName.Close:
      return DomEventListenerFunctions.HandleFocusClose
    case InputName.FocusNext:
      return DomEventListenerFunctions.HandleFocusNext
    case InputName.FocusPrevious:
      return DomEventListenerFunctions.HandleFocusPrevious
    case InputName.Replace:
      return DomEventListenerFunctions.HandleFocusReplace
    case InputName.ReplaceAll:
      return DomEventListenerFunctions.HandleFocusReplaceAll
    default:
      return DomEventListenerFunctions.HandleFocus
  }
}

export const getIconButtonVirtualDom = (iconButton: FindWidgetButton): readonly VirtualDomNode[] => {
  const { disabled, icon, label, name, onClick } = iconButton
  const className = MergeClassNames.mergeClassNames(ClassNames.IconButton, disabled ? ClassNames.IconButtonDisabled : '')
  return [
    {
      ariaLabel: label,
      childCount: 1,
      className,
      disabled: disabled ? true : undefined,
      name,
      onClick,
      onFocus: getOnFocus(name),
      title: label,
      type: VirtualDomElements.Button,
    },
    GetIconVirtualDom.getIconVirtualDom(icon),
  ]
}
