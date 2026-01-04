import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import type { ISearchFieldButton } from '../ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const checkedClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonChecked)
const unCheckedClassName = ClassNames.SearchFieldButton

export const getSearchFieldButtonVirtualDom = (button: ISearchFieldButton): readonly VirtualDomNode[] => {
  const { checked, icon, name, onClick, title } = button
  return [
    {
      ariaChecked: checked,
      childCount: 1,
      className: checked ? checkedClassName : unCheckedClassName,
      name,
      onClick,
      role: AriaRoles.CheckBox,
      tabIndex: 0,
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
