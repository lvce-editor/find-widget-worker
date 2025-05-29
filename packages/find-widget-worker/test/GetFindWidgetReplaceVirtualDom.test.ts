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

  expect(result).toEqual([
    {
      childCount: 2,
      className: 'FindWidgetReplace',
      type: 4,
    },
    {
      childCount: 2,
      className: 'SearchField',
      role: 'none',
      type: 4,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: 'MultilineInputBox',
      name: 'replace-value',
      onFocus: 'handleReplaceFocus',
      onInput: 'handleReplaceInput',
      placeholder: 'Replace',
      spellcheck: false,
      type: 62,
    },
    {
      childCount: 0,
      className: 'SearchFieldButtons',
      type: 4,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.IconButton,
      title: 'Replace',
      ariaLabel: 'Replace',
      childCount: 1,
      disabled: undefined,
      onClick: 'handleReplace',
      name: 'replace-button',
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconreplace-icon',
      role: 'none',
      type: 4,
    },
  ])
})
