import { test, expect } from '@jest/globals'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetFindWidgetVirtualDom from '../src/parts/GetFindWidgetVirtualDom/GetFindWidgetVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getFindWidgetVirtualDom - collapsed', () => {
  const findButtons = [
    {
      disabled: false,
      icon: 'find-icon',
      label: 'Find',
      name: 'find-button',
      onClick: 'handleFind',
    },
  ]

  const findFieldButtons: readonly ISearchFieldButton[] = []
  const replaceButtons: readonly any[] = []
  const replaceFieldButtons: readonly ISearchFieldButton[] = []
  const result = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    '0 matches',
    false,
    findButtons,
    findFieldButtons,
    replaceButtons,
    replaceFieldButtons,
    0,
    '',
    false,
    false,
    false,
  )

  expect(result[0]).toEqual({
    childCount: 3,
    className: 'Viewlet ViewletFind ViewletFindWidget FindWidget',
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })

  expect(result[3]).toEqual({
    ariaExpanded: false,
    ariaLabel: 'Toggle Replace',
    childCount: 1,
    className: 'IconButton SearchToggleButton',
    'data-command': 'toggleReplace',
    name: 'ToggleReplace',
    onClick: 'handleClickToggleReplace',
    onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
    title: 'Toggle Replace',
    type: VirtualDomElements.Button,
  })

  expect(result[4]).toEqual({
    childCount: 0,
    className: 'MaskIcon MaskIconChevronRight',
    type: 4,
  })

  expect(result[5]).toEqual({
    childCount: 1,
    className: ClassNames.FindWidgetRight,
    type: VirtualDomElements.Div,
  })
})

test('getFindWidgetVirtualDom - expanded', () => {
  const findButtons = [
    {
      disabled: false,
      icon: 'find-icon',
      label: 'Find',
      name: 'find-button',
      onClick: 'handleFind',
    },
  ]

  const replaceButtons = [
    {
      disabled: false,
      icon: 'replace-icon',
      label: 'Replace',
      name: 'replace-button',
      onClick: 'handleReplace',
    },
  ]
  const findFieldButtons: readonly ISearchFieldButton[] = []
  const replaceFieldButtons: readonly ISearchFieldButton[] = []

  const result = GetFindWidgetVirtualDom.getFindWidgetVirtualDom(
    '0 matches',
    true,
    findButtons,
    findFieldButtons,
    replaceButtons,
    replaceFieldButtons,
    0,
    '',
    false,
    false,
    false,
  )

  expect(result[0]).toEqual({
    childCount: 3,
    className: 'Viewlet ViewletFind ViewletFindWidget FindWidget',
    role: AriaRoles.Group,
    type: VirtualDomElements.Div,
  })

  expect(result[3]).toEqual({
    ariaExpanded: true,
    ariaLabel: 'Toggle Replace',
    childCount: 1,
    className: 'IconButton SearchToggleButton SearchToggleButtonExpanded',
    'data-command': 'toggleReplace',
    name: 'ToggleReplace',
    onClick: 'handleClickToggleReplace',
    onFocus: DomEventListenerFunctions.HandleToggleReplaceFocus,
    title: 'Toggle Replace',
    type: VirtualDomElements.Button,
  })

  expect(result[5]).toEqual({
    childCount: 2,
    className: ClassNames.FindWidgetRight,
    type: VirtualDomElements.Div,
  })
})
