import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const checkedClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonChecked)
const unCheckedClassName = ClassNames.SearchFieldButton

export const getSearchFieldButtonVirtualDom = (button: ISearchFieldButton): readonly VirtualDomNode[] => {
  const { icon, checked, title, name, onClick } = button
  return [
    {
      type: VirtualDomElements.Div,
      ariaChecked: checked,
      className: checked ? checkedClassName : unCheckedClassName,
      name,
      role: AriaRoles.CheckBox,
      tabIndex: 0,
      title,
      childCount: 1,
      onClick,
    },
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, `MaskIcon${icon}`),
      childCount: 0,
    },
  ]
}
