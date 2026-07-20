import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

const resizerNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.Resizer,
  onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
  type: VirtualDomElements.Div,
}

const resizerHighlightNode: VirtualDomNode = {
  childCount: 0,
  className: ClassNames.ResizerHighlight,
  type: VirtualDomElements.Div,
}

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [resizerNode, resizerHighlightNode]
}
