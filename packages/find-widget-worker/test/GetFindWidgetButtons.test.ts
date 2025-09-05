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
      label: FindStrings.previousMatch(),
      icon: Icon.ArrowUp,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
      name: Names.FocusPrevious,
    },
    {
      label: FindStrings.nextMatch(),
      icon: Icon.ArrowDown,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
      name: Names.FocusNext,
    },
    {
      label: FindStrings.close(),
      icon: Icon.Close,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickClose,
      name: Names.Close,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      label: FindStrings.replace(),
      icon: Icon.Replace,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.Replace,
    },
    {
      label: FindStrings.replaceAll(),
      icon: Icon.ReplaceAll,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.ReplaceAll,
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
      label: FindStrings.previousMatch(),
      icon: Icon.ArrowUp,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
      name: Names.FocusPrevious,
    },
    {
      label: FindStrings.nextMatch(),
      icon: Icon.ArrowDown,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
      name: Names.FocusNext,
    },
    {
      label: FindStrings.close(),
      icon: Icon.Close,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickClose,
      name: Names.Close,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      label: FindStrings.replace(),
      icon: Icon.Replace,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.Replace,
    },
    {
      label: FindStrings.replaceAll(),
      icon: Icon.ReplaceAll,
      disabled: true,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.ReplaceAll,
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
      label: FindStrings.previousMatch(),
      icon: Icon.ArrowUp,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickPreviousMatch,
      name: Names.FocusPrevious,
    },
    {
      label: FindStrings.nextMatch(),
      icon: Icon.ArrowDown,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickNextMatch,
      name: Names.FocusNext,
    },
    {
      label: FindStrings.close(),
      icon: Icon.Close,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickClose,
      name: Names.Close,
    },
  ])
  expect(result.replaceButtons).toEqual([
    {
      label: FindStrings.replace(),
      icon: Icon.Replace,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.Replace,
    },
    {
      label: FindStrings.replaceAll(),
      icon: Icon.ReplaceAll,
      disabled: false,
      onClick: DomEventListenerFunctions.HandleClickButton,
      name: Names.ReplaceAll,
    },
  ])
})
