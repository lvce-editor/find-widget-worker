import { test, expect } from '@jest/globals'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.js'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as GetSearchFieldVirtualDom from '../src/parts/GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchFieldVirtualDom returns correct virtual dom elements', () => {
  const name = 'test-name'
  const placeholder = 'test-placeholder'
  const onInput = 'test-onInput'
  const onFocus = 'test-onFocus'
  const insideButtons: readonly ISearchFieldButton[] = [
    {
      checked: false,
      icon: 'TestIcon',
      name: 'Test',
      onClick: 'test-onClick',
      title: 'Test Title',
    },
  ]
  const outsideButtons: ISearchFieldButton[] = []

  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom(name, placeholder, onInput, insideButtons, outsideButtons, onFocus, '')

  expect(result).toEqual([
    {
      childCount: 2,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      name,
      onFocus,
      onInput,
      placeholder,
      spellcheck: false,
      type: VirtualDomElements.TextArea,
    },
    {
      childCount: insideButtons.length,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'Test',
      onClick: 'test-onClick',
      role: AriaRoles.CheckBox,
      tabIndex: 0,
      title: 'Test Title',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      type: VirtualDomElements.Div,
    },
  ])
})

test('getSearchFieldVirtualDom throws error when outsideButtons are provided', () => {
  const name = 'test-name'
  const placeholder = 'test-placeholder'
  const onInput = 'test-onInput'
  const insideButtons: readonly ISearchFieldButton[] = []
  const outsideButtons: readonly ISearchFieldButton[] = [{ icon: 'TestIcon' }] as any[]

  expect(() => {
    GetSearchFieldVirtualDom.getSearchFieldVirtualDom(name, placeholder, onInput, insideButtons, outsideButtons, '', '')
  }).toThrow('outsideButtons are deprecated')
})
