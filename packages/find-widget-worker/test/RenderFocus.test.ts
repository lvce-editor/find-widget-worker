import { expect, test } from '@jest/globals'
import { ViewletCommand, WhenExpression } from '@lvce-editor/constants'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'

test('renderFocus - search input', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchInput,
    uid: 123,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 123, '[name="search-value"]'])
})

test('renderFocus - replace input', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchReplaceInput,
    uid: 456,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 456, '[name="replace-value"]'])
})

test('renderFocus - match case', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchMatchCase,
    uid: 789,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 789, '[name="MatchCase"]'])
})

test('renderFocus - match whole word', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchWholeWord,
    uid: 100,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 100, '[name="MatchWholeWord"]'])
})

test('renderFocus - regex', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchRegex,
    uid: 200,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 200, '[name="UseRegularExpression"]'])
})

test('renderFocus - preserve case', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchPreserveCase,
    uid: 300,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 300, '[name="PreserveCase"]'])
})

test('renderFocus - replace all', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusSearchReplaceAll,
    uid: 400,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 400, '[name="ReplaceAll"]'])
})

test('renderFocus - close button', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusFindWidgetCloseButton,
    uid: 500,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 500, '[name="Close"]'])
})

test('renderFocus - toggle replace', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: WhenExpression.FocusToggleReplace,
    uid: 600,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 600, '[name="ToggleReplace"]'])
})

test('renderFocus - unknown focus returns empty name selector', () => {
  const oldState = createDefaultState()
  const newState: FindWidgetState = {
    ...createDefaultState(),
    focus: -1,
    uid: 700,
  }
  const result = RenderFocus.renderFocus(oldState, newState)
  expect(result).toEqual([ViewletCommand.FocusSelector, 700, '[name=""]'])
})
