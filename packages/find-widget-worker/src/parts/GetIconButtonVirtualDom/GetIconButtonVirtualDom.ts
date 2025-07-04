import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { FindWidgetButton } from '../FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../GetIconVirtualDom/GetIconVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIconButtonVirtualDom = (iconButton: FindWidgetButton): readonly VirtualDomNode[] => {
  const { label, icon, disabled, name, onClick } = iconButton
  let className = ClassNames.IconButton
  if (disabled) {
    className += ' ' + ClassNames.IconButtonDisabled
  }
  return [
    {
      type: VirtualDomElements.Button,
      className,
      title: label,
      ariaLabel: label,
      childCount: 1,
      disabled: disabled ? true : undefined,
      onClick: onClick,
      name: name,
    },
    GetIconVirtualDom.getIconVirtualDom(icon),
  ]
}
