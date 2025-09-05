import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
	return [
		{
			type: VirtualDomElements.Div,
			className: ClassNames.Resizer,
			childCount: 1,
			onPointerDown: DomEventListenerFunctions.HandleResizerPointerDown,
		},
		{
			type: VirtualDomElements.Div,
			className: ClassNames.ResizerHighlight,
			childCount: 0,
		},
	]
}
