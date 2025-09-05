import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetFindWidgetVirtualDom from '../src/parts/GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getFindWidgetVirtualDom - collapsed', () => {
  const findButtons = [
    {
      label: 'Find',
      icon: 'find-icon',
      disabled: false,
      name: 'find-button',
      onClick: 'handleFind',
    },
  ]

  const result = GetFindWidgetVirtualDom.getFindWidgetVirtualDom('0 matches', false, findButtons, [], false, false, false, 0, '')

  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'Viewlet ViewletFind ViewletFindWidget FindWidget',
    childCount: 3,
    role: AriaRoles.Group,
  })

  expect(result[3]).toEqual({
    type: VirtualDomElements.Button,
    className: 'IconButton SearchToggleButton ',
    title: 'Toggle Replace',
    ariaLabel: 'Toggle Replace',
    childCount: 1,
    onClick: 'handleClickToggleReplace',
    name: 'ToggleReplace',
    ariaExpanded: false,
    'data-command': 'toggleReplace',
    onFocus: 'handleToggleReplaceFocus',
  })

  expect(result[4]).toEqual({
    childCount: 0,
    className: 'MaskIcon MaskIconChevronRight',
    type: 4,
  })

  expect(result[5]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.FindWidgetRight,
    childCount: 1,
  })
})

test('getFindWidgetVirtualDom - expanded', () => {
  const findButtons = [
    {
      label: 'Find',
      icon: 'find-icon',
      disabled: false,
      name: 'find-button',
      onClick: 'handleFind',
    },
  ]

  const replaceButtons = [
    {
      label: 'Replace',
      icon: 'replace-icon',
      disabled: false,
      name: 'replace-button',
      onClick: 'handleReplace',
    },
  ]

  const result = GetFindWidgetVirtualDom.getFindWidgetVirtualDom('0 matches', true, findButtons, replaceButtons, false, false, false, 0, '')

  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: 'Viewlet ViewletFind ViewletFindWidget FindWidget',
    childCount: 3,
    role: AriaRoles.Group,
  })

  expect(result[3]).toEqual({
    type: VirtualDomElements.Button,
    className: 'IconButton SearchToggleButton SearchToggleButtonExpanded',
    title: 'Toggle Replace',
    ariaLabel: 'Toggle Replace',
    childCount: 1,
    onClick: 'handleClickToggleReplace',
    name: 'ToggleReplace',
    ariaExpanded: true,
    'data-command': 'toggleReplace',
    onFocus: 'handleToggleReplaceFocus',
  })

  expect(result[5]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.FindWidgetRight,
    childCount: 2,
  })
})
