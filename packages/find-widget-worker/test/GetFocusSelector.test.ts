import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import * as GetFocusSelector from '../src/parts/GetFocusSelector/GetFocusSelector.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getFocusSelector - search input', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchInput)).toBe(InputName.SearchValue)
})

test('getFocusSelector - replace input', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchReplaceInput)).toBe(InputName.ReplaceValue)
})

test('getFocusSelector - match case', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchMatchCase)).toBe('MatchCase')
})

test('getFocusSelector - preserve case', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchPreserveCase)).toBe('PreserveCase')
})

test('getFocusSelector - regex', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchRegex)).toBe('UseRegularExpression')
})

test('getFocusSelector - match whole word', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchWholeWord)).toBe('MatchWholeWord')
})

test('getFocusSelector - unknown focus key', () => {
  expect(GetFocusSelector.getFocusSelector(-1)).toBe('')
})

test('getFocusSelector - replace all', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusSearchReplaceAll)).toBe('ReplaceAll')
})

test('getFocusSelector - close', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusFindWidgetCloseButton)).toBe('Close')
})

test('getFocusSelector - previous match', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusFindWidgetPreviousMatchButton)).toBe('FocusPrevious')
})

test('getFocusSelector - next match', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusFindWidgetNextMatchButton)).toBe('FocusNext')
})

test('getFocusSelector - replace button', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusFindWidgetReplaceButton)).toBe('Replace')
})

test('getFocusSelector - find-widget replace all button', () => {
  expect(GetFocusSelector.getFocusSelector(WhenExpression.FocusFindWidgetReplaceAllButton)).toBe('ReplaceAll')
})
