import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'Resizer',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'ResizerHighlight',
      childCount: 0,
    },
  ]
}
