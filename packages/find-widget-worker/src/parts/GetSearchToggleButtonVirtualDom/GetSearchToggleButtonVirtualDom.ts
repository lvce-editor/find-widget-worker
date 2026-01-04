import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../FindStrings/FindStrings.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getSearchToggleButtonVirtualDom = (replaceExpanded: boolean, onClick = ''): readonly VirtualDomNode[] => {
  const title = FindStrings.toggleReplace()
  return [
    {
      ariaExpanded: replaceExpanded,
      ariaLabel: title,
      childCount: 1,
      className: MergeClassNames.mergeClassNames(
        ClassNames.IconButton,
        ClassNames.SearchToggleButton,
        replaceExpanded ? ClassNames.SearchToggleButtonExpanded : '',
      ),
      'data-command': 'toggleReplace',
      name: InputName.ToggleReplace,
      onClick,
      onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
      title,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames(
        ClassNames.MaskIcon,
        replaceExpanded ? ClassNames.MaskIconChevronDown : ClassNames.MaskIconChevronRight,
      ),
      type: VirtualDomElements.Div,
    },
  ]
}
