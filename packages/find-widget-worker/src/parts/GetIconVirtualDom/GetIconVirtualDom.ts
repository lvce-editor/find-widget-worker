import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { AriaRoles } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'

export const getIconVirtualDom = (icon: string, type = VirtualDomElements.Div) => {
	return {
		type,
		className: `${ClassNames.MaskIcon} MaskIcon${icon}`,
		role: AriaRoles.None,
		childCount: 0,
	}
}
