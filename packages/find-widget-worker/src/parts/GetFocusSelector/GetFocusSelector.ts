import { WhenExpression } from '@lvce-editor/constants'
import * as InputName from '../InputName/InputName.ts'

export const getFocusSelector = (focusKey: number): string => {
  switch (focusKey) {
    case WhenExpression.FocusSearchInput:
      return InputName.SearchValue
    case WhenExpression.FocusSearchReplaceInput:
      return InputName.ReplaceValue
    case WhenExpression.FocusSearchMatchCase:
      return InputName.MatchCase
    case WhenExpression.FocusSearchPreserveCase:
      return InputName.PreserveCase
    case WhenExpression.FocusSearchRegex:
      return InputName.UseRegularExpression
    case WhenExpression.FocusSearchWholeWord:
      return InputName.MatchWholeWord
    case WhenExpression.FocusSearchReplaceAll:
      return InputName.ReplaceAll
    case WhenExpression.FocusToggleReplace:
      return InputName.ToggleReplace
    case WhenExpression.FocusFindWidgetCloseButton:
      return InputName.Close
    default:
      return ''
  }
}
