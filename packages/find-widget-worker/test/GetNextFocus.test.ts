import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import * as GetNextFocus from '../src/parts/GetNextFocus/GetNextFocus.ts'

test('getNextFocus - from search input with replace expanded', () => {
  const focus = WhenExpression.FocusSearchInput
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchReplaceInput)
})

test('getNextFocus - from search input without replace expanded', () => {
  const focus = WhenExpression.FocusSearchInput
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchMatchCase)
})

test('getNextFocus - from replace input', () => {
  const focus = WhenExpression.FocusSearchReplaceInput
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchMatchCase)
})

test('getNextFocus - from match case', () => {
  const focus = WhenExpression.FocusSearchMatchCase
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchWholeWord)
})

test('getNextFocus - from whole word', () => {
  const focus = WhenExpression.FocusSearchWholeWord
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchRegex)
})

test('getNextFocus - from regex with replace expanded', () => {
  const focus = WhenExpression.FocusSearchRegex
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchPreserveCase)
})

test('getNextFocus - from regex without replace expanded', () => {
  const focus = WhenExpression.FocusSearchRegex
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetPreviousMatchButton)
})

test('getNextFocus - from preserve case', () => {
  const focus = WhenExpression.FocusSearchPreserveCase
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetPreviousMatchButton)
})

test('getNextFocus - from previous match', () => {
  const focus = WhenExpression.FocusFindWidgetPreviousMatchButton
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetNextMatchButton)
})

test('getNextFocus - from next match', () => {
  const focus = WhenExpression.FocusFindWidgetNextMatchButton
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetCloseButton)
})

test('getNextFocus - from close with replace expanded', () => {
  const focus = WhenExpression.FocusFindWidgetCloseButton
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetReplaceButton)
})

test('getNextFocus - from close without replace expanded wraps to toggle replace', () => {
  const focus = WhenExpression.FocusFindWidgetCloseButton
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusToggleReplace)
})

test('getNextFocus - from replace button', () => {
  const focus = WhenExpression.FocusFindWidgetReplaceButton
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusFindWidgetReplaceAllButton)
})

test('getNextFocus - from replace all wraps to toggle replace', () => {
  const focus = WhenExpression.FocusFindWidgetReplaceAllButton
  const flags = true
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusToggleReplace)
})

test('getNextFocus - from include input', () => {
  const focus = WhenExpression.FocusSearchIncludeInput
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchOpenEditors)
})

test('getNextFocus - from open editors', () => {
  const focus = WhenExpression.FocusSearchOpenEditors
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusSearchExcludeInput)
})

test('getNextFocus - from exclude input', () => {
  const focus = WhenExpression.FocusSearchExcludeInput
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(WhenExpression.FocusIgnoreFiles)
})

test('getNextFocus - default case returns same focus', () => {
  const focus = -1
  const flags = false
  expect(GetNextFocus.getNextFocus(focus, flags)).toBe(focus)
})
