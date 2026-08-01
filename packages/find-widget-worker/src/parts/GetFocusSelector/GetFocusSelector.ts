import { WhenExpression } from '@lvce-editor/constants'
import * as InputName from '../InputName/InputName.ts'

export const getFocusSelector = (focusKey: number): string => {
  switch (focusKey) {
    case WhenExpression.FocusFindWidgetCloseButton:
      return InputName.Close
    case WhenExpression.FocusFindWidgetNextMatchButton:
      return InputName.FocusNext
    case WhenExpression.FocusFindWidgetPreviousMatchButton:
      return InputName.FocusPrevious
    case WhenExpression.FocusFindWidgetReplaceAllButton:
      return InputName.ReplaceAll
    case WhenExpression.FocusFindWidgetReplaceButton:
      return InputName.Replace
    case WhenExpression.FocusSearchInput:
      return InputName.SearchValue
    case WhenExpression.FocusSearchMatchCase:
      return InputName.MatchCase
    case WhenExpression.FocusSearchPreserveCase:
      return InputName.PreserveCase
    case WhenExpression.FocusSearchRegex:
      return InputName.UseRegularExpression
    case WhenExpression.FocusSearchReplaceAll:
      return InputName.ReplaceAll
    case WhenExpression.FocusSearchReplaceInput:
      return InputName.ReplaceValue
    case WhenExpression.FocusSearchWholeWord:
      return InputName.MatchWholeWord
    case WhenExpression.FocusToggleReplace:
      return InputName.ToggleReplace
    default:
      return ''
  }
}
