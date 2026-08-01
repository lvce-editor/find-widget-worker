import { expect, test } from '@jest/globals'
import type { FindWidgetButton } from '../src/parts/FindWidgetButton/FindWidgetButton.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetIconButtonVirtualDom from '../src/parts/GetIconButtonVirtualDom/GetIconButtonVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

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
    title: 'Disabled Button',
    type: VirtualDomElements.Button,
  })
})
