import { expect, test } from '@jest/globals'
import type { FindWidgetButton } from '../src/parts/FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetIconButtonVirtualDom from '../src/parts/GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test.each([
  [InputName.Close, DomEventListenerFunctions.HandleFocusClose],
  [InputName.FocusNext, DomEventListenerFunctions.HandleFocusNext],
  [InputName.FocusPrevious, DomEventListenerFunctions.HandleFocusPrevious],
  [InputName.Replace, DomEventListenerFunctions.HandleFocusReplace],
  [InputName.ReplaceAll, DomEventListenerFunctions.HandleFocusReplaceAll],
])('getIconButtonVirtualDom - uses the focus listener for %s', (name, expectedOnFocus) => {
  const iconButton: FindWidgetButton = {
    disabled: false,
    icon: 'test-icon',
    label: 'Test Button',
    name,
    onClick: '',
  }

  const result = GetIconButtonVirtualDom.getIconButtonVirtualDom(iconButton)

  expect(result[0]).toHaveProperty('onFocus', expectedOnFocus)
})

test('getIconButtonVirtualDom - basic button', () => {
  const iconButton: FindWidgetButton = {
    disabled: false,
    icon: 'test-icon',
    label: 'Test Button',
    name: 'test-button',
    onClick: '',
  }

  const result = GetIconButtonVirtualDom.getIconButtonVirtualDom(iconButton)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    ariaLabel: 'Test Button',
    childCount: 1,
    className: ClassNames.IconButton,
    disabled: undefined,
    name: 'test-button',
    onClick: iconButton.onClick,
    onFocus: DomEventListenerFunctions.HandleFocus,
    title: 'Test Button',
    type: VirtualDomElements.Button,
  })
})

test('getIconButtonVirtualDom - disabled button', () => {
  const iconButton: FindWidgetButton = {
    disabled: true,
    icon: 'disabled-icon',
    label: 'Disabled Button',
    name: 'disabled-button',
    onClick: '',
  }

  const result = GetIconButtonVirtualDom.getIconButtonVirtualDom(iconButton)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    ariaLabel: 'Disabled Button',
    childCount: 1,
    className: `${ClassNames.IconButton} ${ClassNames.IconButtonDisabled}`,
    disabled: true,
    name: 'disabled-button',
    onClick: iconButton.onClick,
    onFocus: DomEventListenerFunctions.HandleFocus,
    title: 'Disabled Button',
    type: VirtualDomElements.Button,
  })
})
