import { test, expect } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../src/parts/FindStrings/FindStrings.ts'
import * as GetFindWidgetReplaceVirtualDom from '../src/parts/GetFindWidgetReplaceVirtualDom/GetFindWidgetReplaceVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getFindWidgetReplaceVirtualDom - collapsed', () => {
  const result = GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(false, [])
  expect(result).toEqual([])
})

test('getFindWidgetReplaceVirtualDom - expanded', () => {
  const replaceButtons = [
    {
      label: 'Replace',
      icon: 'replace-icon',
      disabled: false,
      name: 'replace-button',
      onClick: 'handleReplace',
    },
  ]

  const result = GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(true, replaceButtons)

  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.FindWidgetReplace,
    childCount: 2,
  })

  expect(result[1]).toEqual({
    type: VirtualDomElements.Input,
    className: ClassNames.SearchField,
    id: 'replace-value',
    placeholder: FindStrings.replace(),
    value: '',
    onInput: DomEventListenerFunctions.HandleReplaceInput,
    onFocus: DomEventListenerFunctions.HandleReplaceFocus,
  })

  expect(result[2]).toEqual({
    type: VirtualDomElements.Button,
    className: ClassNames.IconButton,
    title: 'Replace',
    ariaLabel: 'Replace',
    childCount: 1,
    disabled: undefined,
    onClick: 'handleReplace',
    name: 'replace-button',
  })
})
