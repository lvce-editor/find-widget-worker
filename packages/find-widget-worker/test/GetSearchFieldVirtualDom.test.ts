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
      icon: 'TestIcon',
      checked: false,
      title: 'Test Title',
      name: 'Test',
    },
  ]
  const outsideButtons: ISearchFieldButton[] = []

  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom(name, placeholder, onInput, insideButtons, outsideButtons, onFocus)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      childCount: 2,
    },
    {
      type: VirtualDomElements.TextArea,
      className: ClassNames.MultilineInputBox,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      placeholder,
      name,
      onInput,
      onFocus,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: insideButtons.length,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButton,
      title: 'Test Title',
      name: 'Test',
      role: AriaRoles.CheckBox,
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      childCount: 0,
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
    GetSearchFieldVirtualDom.getSearchFieldVirtualDom(name, placeholder, onInput, insideButtons, outsideButtons)
  }).toThrow('outsideButtons are deprecated')
})
