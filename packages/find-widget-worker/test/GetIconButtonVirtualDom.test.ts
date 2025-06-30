import { expect, test } from '@jest/globals'
import type { FindWidgetButton } from '../src/parts/FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetIconButtonVirtualDom from '../src/parts/GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getIconButtonVirtualDom - basic button', () => {
  const iconButton: FindWidgetButton = {
    label: 'Test Button',
    icon: 'test-icon',
    disabled: false,
    name: 'test-button',
    onClick: '',
  }

  const result = GetIconButtonVirtualDom.getIconButtonVirtualDom(iconButton)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Button,
    className: ClassNames.IconButton,
    title: 'Test Button',
    ariaLabel: 'Test Button',
    childCount: 1,
    disabled: undefined,
    onClick: iconButton.onClick,
    name: 'test-button',
  })
})

test('getIconButtonVirtualDom - disabled button', () => {
  const iconButton: FindWidgetButton = {
    label: 'Disabled Button',
    icon: 'disabled-icon',
    disabled: true,
    name: 'disabled-button',
    onClick: '',
  }

  const result = GetIconButtonVirtualDom.getIconButtonVirtualDom(iconButton)

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Button,
    className: `${ClassNames.IconButton} ${ClassNames.IconButtonDisabled}`,
    title: 'Disabled Button',
    ariaLabel: 'Disabled Button',
    childCount: 1,
    disabled: true,
    onClick: iconButton.onClick,
    name: 'disabled-button',
  })
})
