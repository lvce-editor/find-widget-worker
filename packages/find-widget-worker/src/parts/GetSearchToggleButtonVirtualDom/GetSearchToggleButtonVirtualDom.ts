import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputName from '../InputName/InputName.ts'

export const getSearchToggleButtonVirtualDom = (replaceExpanded: boolean, onClick = ''): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Button,
      className: `IconButton SearchToggleButton ${replaceExpanded ? 'SearchToggleButtonExpanded' : ''}`,
      title: 'Toggle Replace',
      ariaLabel: 'Toggle Replace',
      ariaExpanded: replaceExpanded,
      name: InputName.ToggleReplace,
      childCount: 1,
      'data-command': 'toggleReplace',
      onClick,
      onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
    },
    {
      type: VirtualDomElements.Div,
      className: `MaskIcon ${replaceExpanded ? 'MaskIconChevronDown' : 'MaskIconChevronRight'}`,
      childCount: 0,
    },
  ]
}
