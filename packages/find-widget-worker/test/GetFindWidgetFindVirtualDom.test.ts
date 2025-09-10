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
      icon: 'CaseSensitive',
      checked: false,
      title: 'Match Case',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      icon: 'WholeWord',
      checked: false,
      title: 'Match Whole Word',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      icon: 'Regex',
      checked: false,
      title: 'Use Regular Expression',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
  const matchCount = 0
  const hasValue = false
  const hasError = false

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 2,
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
      childCount: 3,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Match Case',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconCaseSensitive',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Match Whole Word',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconWholeWord',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Use Regular Expression',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconRegex',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: matchCountText,
      childCount: 0,
    },
  ])
})

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with matches and buttons', () => {
  const matchCountText = '3 matches'
  const buttons: readonly FindWidgetButton[] = [
    {
      label: 'Previous',
      icon: 'ArrowUp',
      disabled: false,
      onClick: 'handlePrevious',
      name: 'focusPrevious',
    },
  ]
  const fieldButtons: readonly ISearchFieldButton[] = [
    {
      icon: 'CaseSensitive',
      checked: false,
      title: 'Match Case',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      icon: 'WholeWord',
      checked: false,
      title: 'Match Whole Word',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      icon: 'Regex',
      checked: false,
      title: 'Use Regular Expression',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
  const matchCount = 3
  const hasValue = true
  const hasError = false

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError)

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FindWidgetFind,
      childCount: 2,
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
      childCount: 3,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Match Case',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconCaseSensitive',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Match Whole Word',
      name: 'MatchWholeWord',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconWholeWord',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Button,
      className: ClassNames.SearchFieldButton,
      title: 'Use Regular Expression',
      name: 'UseRegularExpression',
      onClick: DomEventListenerFunctions.HandleClickButton,
      role: 'checkbox',
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconRegex',
      childCount: 0,
    },
    {
      childCount: 2,
      className: 'FindWidgetActions',
      type: 4,
    },
    {
      type: VirtualDomElements.Div,
      className: GetFindMatchCountClassName.getFindMatchCountClassName(matchCount, hasValue),
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: matchCountText,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Button,
      className: 'IconButton',
      title: 'Previous',
      ariaLabel: 'Previous',
      disabled: undefined,
      onClick: 'handlePrevious',
      name: 'focusPrevious',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconArrowUp',
      role: 'none',
      childCount: 0,
    },
  ])
})

test('getFindWidgetFindVirtualDom returns correct virtual dom elements with error', () => {
  const matchCountText = 'No matches'
  const buttons: readonly FindWidgetButton[] = []
  const fieldButtons: readonly ISearchFieldButton[] = [
    {
      icon: 'CaseSensitive',
      checked: false,
      title: 'Match Case',
      name: 'MatchCase',
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ]
  const matchCount = 0
  const hasValue = true
  const hasError = true

  const result = GetFindWidgetFindVirtualDom.getFindWidgetFindVirtualDom(matchCountText, buttons, fieldButtons, matchCount, hasValue, hasError)

  expect(result[1]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SearchField,
    role: 'none',
    childCount: 2,
  })
  expect(result[2]).toEqual({
    type: VirtualDomElements.TextArea,
    className: `${ClassNames.MultilineInputBox} ${ClassNames.InputValidationError}`,
    spellcheck: false,
    autocapitalize: 'off',
    autocorrect: 'off',
    placeholder: FindStrings.find(),
    name: 'search-value',
    onInput: DomEventListenerFunctions.HandleInput,
    onFocus: DomEventListenerFunctions.HandleFocus,
    childCount: 0,
  })
})
