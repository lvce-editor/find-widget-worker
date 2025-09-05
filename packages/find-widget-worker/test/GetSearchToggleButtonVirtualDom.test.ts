import { test, expect } from '@jest/globals'
import * as GetSearchToggleButtonVirtualDom from '../src/parts/GetSearchToggleButtonVirtualDom/GetSearchToggleButtonVirtualDom.js'
import * as InputName from '../src/parts/InputName/InputName.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchToggleButtonVirtualDom returns correct virtual dom elements for collapsed state', () => {
  const result = GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(false)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: 'IconButton SearchToggleButton',
      title: 'Toggle Replace',
      ariaLabel: 'Toggle Replace',
      ariaExpanded: false,
      name: InputName.ToggleReplace,
      childCount: 1,
      'data-command': 'toggleReplace',
      onClick: '',
      onFocus: 'handleToggleReplaceFocus',
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconChevronRight',
      childCount: 0,
    },
  ])
})

test('getSearchToggleButtonVirtualDom returns correct virtual dom elements for expanded state', () => {
  const result = GetSearchToggleButtonVirtualDom.getSearchToggleButtonVirtualDom(true, 'test-onClick')
  expect(result).toEqual([
    {
      type: VirtualDomElements.Button,
      className: 'IconButton SearchToggleButton SearchToggleButtonExpanded',
      title: 'Toggle Replace',
      ariaLabel: 'Toggle Replace',
      ariaExpanded: true,
      name: InputName.ToggleReplace,
      childCount: 1,
      'data-command': 'toggleReplace',
      onClick: 'test-onClick',
      onFocus: 'handleToggleReplaceFocus',
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconChevronDown',
      childCount: 0,
    },
  ])
})
