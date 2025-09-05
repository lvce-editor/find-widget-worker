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
			type: VirtualDomElements.Button,
			className: MergeClassNames.mergeClassNames(
				ClassNames.IconButton,
				ClassNames.SearchToggleButton,
				replaceExpanded ? ClassNames.SearchToggleButtonExpanded : ''
			),
			title,
			ariaLabel: title,
			ariaExpanded: replaceExpanded,
			name: InputName.ToggleReplace,
			childCount: 1,
			'data-command': 'toggleReplace',
			onClick,
			onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
		},
		{
			type: VirtualDomElements.Div,
			className: MergeClassNames.mergeClassNames(
				ClassNames.MaskIcon,
				replaceExpanded ? ClassNames.MaskIconChevronDown : ClassNames.MaskIconChevronRight
			),
			childCount: 0,
		},
	]
}
