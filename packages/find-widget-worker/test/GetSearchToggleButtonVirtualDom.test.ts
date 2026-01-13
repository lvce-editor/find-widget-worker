import { test, expect } from '@jest/globals'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.js'
import * as GetSearchToggleButtonVirtualDom from '../src/parts/GetSearchToggleButtonVirtualDom/GetSearchToggleButtonVirtualDom.js'
import * as InputName from '../src/parts/InputName/InputName.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchToggleButtonVirtualDom returns correct virtual dom elements for collapsed state', () => {
  const result = GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(false)
  expect(result).toEqual([
    {
      ariaExpanded: false,
      ariaLabel: 'Toggle Replace',
      childCount: 1,
      className: 'IconButton SearchToggleButton',
      'data-command': 'toggleReplace',
      name: InputName.ToggleReplace,
      onClick: '',
      onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
      title: 'Toggle Replace',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconChevronRight',
      type: VirtualDomElements.Div,
    },
  ])
})

test('getSearchToggleButtonVirtualDom returns correct virtual dom elements for expanded state', () => {
  const result = GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(true, 'test-onClick')
  expect(result).toEqual([
    {
      ariaExpanded: true,
      ariaLabel: 'Toggle Replace',
      childCount: 1,
      className: 'IconButton SearchToggleButton SearchToggleButtonExpanded',
      'data-command': 'toggleReplace',
      name: InputName.ToggleReplace,
      onClick: 'test-onClick',
      onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
      title: 'Toggle Replace',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconChevronDown',
      type: VirtualDomElements.Div,
    },
  ])
})
