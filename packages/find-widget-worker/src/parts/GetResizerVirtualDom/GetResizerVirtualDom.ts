import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Resizer',
      childCount: 1,
      onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
      onPointerMove: DomEventListenerFunctions.HandleResizerPointerUp,
      onPointerUp: DomEventListenerFunctions.HandleResizerPointerMove,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ResizerHighlight',
      childCount: 0,
    },
  ]
}
