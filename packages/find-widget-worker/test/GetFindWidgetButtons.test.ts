import { test, expect } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as FindStrings from '../src/parts/FindStrings/FindStrings.ts'
import * as GetFindWidgetButtons from '../src/parts/GetFindWidgedButtons/GetFindWidgetButtons.ts'
import * as Icon from '../src/parts/Icon/Icon.ts'
import * as Names from '../src/parts/InputName/InputName.ts'

test('getFindWidgetButtons with find buttons enabled and replace buttons disabled', () => {
  const state = CreateDefaultState.createDefaultState()
  const result = GetFindWidgetButtons.getFindWidgetButtons(
    true,
    false,
    state.matchCase,
    state.matchWholeWord,
    state.useRegularExpression,
    state.preserveCase,
  )
  expect(result.findButtons).toEqual([
    {
      disabled: false,
      icon: Icon.ArrowUp,
      label: FindStrings.previousMatch(),
      name: Names.FocusPrevious,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
    },
    {
      disabled: false,
      icon: Icon.ArrowDown,
      label: FindStrings.nextMatch(),
      name: Names.FocusNext,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
    },
    {
      disabled: false,
      icon: Icon.Close,
      label: FindStrings.close(),
      name: Names.Close,
      onClick: DomEventListenerFunctions.HandleClickClose,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      disabled: true,
      icon: Icon.Replace,
      label: FindStrings.replace(),
      name: Names.Replace,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      disabled: true,
      icon: Icon.ReplaceAll,
      label: FindStrings.replaceAll(),
      name: Names.ReplaceAll,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ])
})

test('getFindWidgetButtons with all buttons disabled', () => {
  const state = CreateDefaultState.createDefaultState()
  const result = GetFindWidgetButtons.getFindWidgetButtons(
    false,
    false,
    state.matchCase,
    state.matchWholeWord,
    state.useRegularExpression,
    state.preserveCase,
  )
  expect(result.findButtons).toEqual([
    {
      disabled: true,
      icon: Icon.ArrowUp,
      label: FindStrings.previousMatch(),
      name: Names.FocusPrevious,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
    },
    {
      disabled: true,
      icon: Icon.ArrowDown,
      label: FindStrings.nextMatch(),
      name: Names.FocusNext,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
    },
    {
      disabled: false,
      icon: Icon.Close,
      label: FindStrings.close(),
      name: Names.Close,
      onClick: DomEventListenerFunctions.HandleClickClose,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      disabled: true,
      icon: Icon.Replace,
      label: FindStrings.replace(),
      name: Names.Replace,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      disabled: true,
      icon: Icon.ReplaceAll,
      label: FindStrings.replaceAll(),
      name: Names.ReplaceAll,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ])
})

test('getFindWidgetButtons with all buttons enabled', () => {
  const state = CreateDefaultState.createDefaultState()
  const result = GetFindWidgetButtons.getFindWidgetButtons(
    true,
    true,
    state.matchCase,
    state.matchWholeWord,
    state.useRegularExpression,
    state.preserveCase,
  )
  expect(result.findButtons).toEqual([
    {
      disabled: false,
      icon: Icon.ArrowUp,
      label: FindStrings.previousMatch(),
      name: Names.FocusPrevious,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
    },
    {
      disabled: false,
      icon: Icon.ArrowDown,
      label: FindStrings.nextMatch(),
      name: Names.FocusNext,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
    },
    {
      disabled: false,
      icon: Icon.Close,
      label: FindStrings.close(),
      name: Names.Close,
      onClick: DomEventListenerFunctions.HandleClickClose,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      disabled: false,
      icon: Icon.Replace,
      label: FindStrings.replace(),
      name: Names.Replace,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
    {
      disabled: false,
      icon: Icon.ReplaceAll,
      label: FindStrings.replaceAll(),
      name: Names.ReplaceAll,
      onClick: DomEventListenerFunctions.HandleClickButton,
    },
  ])
})
