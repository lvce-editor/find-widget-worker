import { test, expect } from '@jest/globals'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetFindWidgetReplaceVirtualDom from '../src/parts/GetFindWidgetReplaceVirtualDom/GetFindWidgetReplaceVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getFindWidgetReplaceVirtualDom - collapsed', () => {
  const result = GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(false, [], [], false)
  expect(result).toEqual([])
})

test('getFindWidgetReplaceVirtualDom - expanded', () => {
  const replaceButtons = [
    {
      disabled: false,
      icon: 'replace-icon',
      label: 'Replace',
      name: 'replace-button',
      onClick: 'handleReplace',
    },
  ]
  const replaceFieldButtons: readonly ISearchFieldButton[] = []

  const result = GetFindWidgetReplaceVirtualDom.getFindWidgetReplaceVirtualDom(true, replaceButtons, replaceFieldButtons, false)

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
      ariaLabel: 'Replace',
      childCount: 1,
      className: ClassNames.IconButton,
      disabled: undefined,
      name: 'replace-button',
      onClick: 'handleReplace',
      title: 'Replace',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconreplace-icon',
      role: 'none',
      type: 4,
    },
  ])
})
