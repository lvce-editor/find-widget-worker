import { test, expect } from '@jest/globals'
import type { FindWidgetButton } from '../src/parts/FindWidgetButton/FindWidgetButton.ts'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.js'
import * as FindStrings from '../src/parts/FindStrings/FindStrings.js'
import * as GetFindMatchCountClassName from '../src/parts/GetFindMatchCountClassName/GetFindMatchCountClassName.js'
import * as GetFindWidgetFindVirtualDom from '../src/parts/GetFindWidgetFindVirtualDom/GetFindWidgetFindVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with no matches', () => {
  const matchCountText = 'No matches'
  const buttons: readonly FindWidgetButton[] = []
  const fieldButtons: readonly ISearchFieldButton[] = [
    {
      checked: false,
      icon: 'CaseSensitive',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Match Case',
    },
    {
      checked: false,
      icon: 'WholeWord',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Match Whole Word',
    },
    {
      checked: false,
      icon: 'Regex',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Use Regular Expression',
    },
  ]
  const matchCount = 0
  const hasValue = false
  const hasError = false

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError, false)

  expect(result).toEqual([
    {
      childCount: 2,
      className: ClassNames.FindWidgetFind,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: ClassNames.SearchField,
      role: 'none',
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      name: 'search-value',
      onFocus: DomEventListenerFunctions.HandleFocus,
      onInput: DomEventListenerFunctions.HandleInput,
      placeholder: FindStrings.find(),
      spellcheck: false,
      type: VirtualDomElements.TextArea,
    },
    {
      childCount: 3,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Match Case',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconCaseSensitive',
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Match Whole Word',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconWholeWord',
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Use Regular Expression',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconRegex',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'FindWidgetActions',
      type: 4,
    },
    {
      childCount: 1,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      text: matchCountText,
      type: VirtualDomElements.Text,
    },
  ])
})

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with matches and buttons', () => {
  const matchCountText = '3 matches'
  const buttons: readonly FindWidgetButton[] = [
    {
      disabled: false,
      icon: 'ArrowUp',
      label: 'Previous',
      name: 'focusPrevious',
      onClick: 'handlePrevious',
    },
  ]
  const fieldButtons: readonly ISearchFieldButton[] = [
    {
      checked: false,
      icon: 'CaseSensitive',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Match Case',
    },
    {
      checked: false,
      icon: 'WholeWord',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Match Whole Word',
    },
    {
      checked: false,
      icon: 'Regex',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Use Regular Expression',
    },
  ]
  const matchCount = 3
  const hasValue = true
  const hasError = false

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError, false)

  expect(result).toEqual([
    {
      childCount: 2,
      className: ClassNames.FindWidgetFind,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: ClassNames.SearchField,
      role: 'none',
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      name: 'search-value',
      onFocus: DomEventListenerFunctions.HandleFocus,
      onInput: DomEventListenerFunctions.HandleInput,
      placeholder: FindStrings.find(),
      spellcheck: false,
      type: VirtualDomElements.TextArea,
    },
    {
      childCount: 3,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Match Case',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconCaseSensitive',
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Match Whole Word',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconWholeWord',
      type: VirtualDomElements.Div,
    },
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      tabIndex: 0,
      title: 'Use Regular Expression',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconRegex',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'FindWidgetActions',
      type: 4,
    },
    {
      childCount: 1,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      text: matchCountText,
      type: VirtualDomElements.Text,
    },
    {
      ariaLabel: 'Previous',
      childCount: 1,
      className: 'IconButton',
      disabled: undefined,
      name: 'focusPrevious',
      onClick: 'handlePrevious',
      title: 'Previous',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconArrowUp',
      role: 'none',
      type: VirtualDomElements.Div,
    },
  ])
})

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with error', () => {
  const matchCountText = 'No matches'
  const buttons: readonly FindWidgetButton[] = []
  const fieldButtons: readonly ISearchFieldButton[] = [
    {
      checked: false,
      icon: 'CaseSensitive',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      title: 'Match Case',
    },
  ]
  const matchCount = 0
  const hasValue = true
  const hasError = true

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError, false)

  expect(result[1]).toEqual({
    childCount: 2,
    className: ClassNames.SearchField + ' ' + ClassNames.SearchFieldError,
    role: 'none',
    type: VirtualDomElements.Div,
  })
  expect(result[2]).toEqual({
    autocapitalize: 'off',
    autocorrect: 'off',
    childCount: 0,
    className: `${ClassNames.MultilineInputBox}`,
    name: 'search-value',
    onFocus: DomEventListenerFunctions.HandleFocus,
    onInput: DomEventListenerFunctions.HandleInput,
    placeholder: FindStrings.find(),
    spellcheck: false,
    type: VirtualDomElements.TextArea,
  })
})
