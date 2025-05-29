import { test, expect } from '@jest/globals'
import * as GetFindWidgetFindVirtualDom from '../src/parts/GetFindWidgetFindVirtualDom/GetFindWidgetFindVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.js'
import * as FindStrings from '../src/parts/FindStrings/FindStrings.js'
import * as GetFindMatchCountClassName from '../src/parts/GetFindMatchCountClassName/GetFindMatchCountClassName.js'

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with no matches', () => {
  const matchCountText = 'No matches'
  const buttons = []
  const matchCount = 0
  const value = ''

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, matchCount, value)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 5,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      role: 'none',
      childCount: 2,
    },
    {
      type: VirtualDomElements.TextArea,
      className: ClassNames.MultilineInputBox,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      placeholder: FindStrings.find(),
      name: 'search-value',
      onInput: DomEventListenerFunctions.HandleInput,
      onFocus: DomEventListenerFunctions.HandleFocus,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, value),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: matchCountText,
      childCount: 0,
    },
  ])
})

test.skip('getFindWidgetFindVirtualDom returns correct virtual dom elements with matches and buttons', () => {
  const matchCountText = '3 matches'
  const buttons = [
    {
      label: 'Previous',
      icon: 'ArrowUp',
      disabled: false,
      onClick: 'handlePrevious',
      name: 'focusPrevious',
    },
  ]
  const matchCount = 3
  const value = 'test'

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, matchCount, value)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 5,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      role: 'none',
      childCount: 2,
    },
    {
      type: VirtualDomElements.TextArea,
      className: ClassNames.MultilineInputBox,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      placeholder: FindStrings.find(),
      name: 'search-value',
      onInput: DomEventListenerFunctions.HandleInput,
      onFocus: DomEventListenerFunctions.HandleFocus,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, value),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: matchCountText,
    },
    {
      type: VirtualDomElements.Button,
      className: 'IconButton',
      title: 'Previous',
      disabled: false,
      onClick: 'handlePrevious',
      name: 'focusPrevious',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon ArrowUp',
      childCount: 0,
    },
  ])
})
