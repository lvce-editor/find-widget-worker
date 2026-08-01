import { expect, test } from '@jest/globals'
import { WhenExpression } from '@lvce-editor/constants'
import { getFindWidgetFocusKey } from '../src/parts/GetFindWidgetFocusKey/GetFindWidgetFocusKey.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test.each([
  [InputName.Close, WhenExpression.FocusFindWidgetCloseButton],
  [InputName.FocusNext, WhenExpression.FocusFindWidgetNextMatchButton],
  [InputName.FocusPrevious, WhenExpression.FocusFindWidgetPreviousMatchButton],
  [InputName.MatchCase, WhenExpression.FocusSearchMatchCase],
  [InputName.MatchWholeWord, WhenExpression.FocusSearchWholeWord],
  [InputName.PreserveCase, WhenExpression.FocusSearchPreserveCase],
  [InputName.Replace, WhenExpression.FocusFindWidgetReplaceButton],
  [InputName.ReplaceAll, WhenExpression.FocusFindWidgetReplaceAllButton],
  [InputName.ReplaceValue, WhenExpression.FocusSearchReplaceInput],
  [InputName.SearchValue, WhenExpression.FocusSearchInput],
  [InputName.ToggleReplace, WhenExpression.FocusToggleReplace],
  [InputName.UseRegularExpression, WhenExpression.FocusSearchRegex],
])('getFindWidgetFocusKey - %s', (name, expected) => {
  expect(getFindWidgetFocusKey(name)).toBe(expected)
})

test('getFindWidgetFocusKey - unknown name', () => {
  expect(getFindWidgetFocusKey('unknown')).toBe(WhenExpression.Empty)
})
