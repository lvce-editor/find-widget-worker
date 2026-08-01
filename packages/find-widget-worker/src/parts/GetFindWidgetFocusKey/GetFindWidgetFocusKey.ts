import { WhenExpression } from '@lvce-editor/constants'
import * as InputName from '../InputName/InputName.ts'

export const getFindWidgetFocusKey = (name: string): number => {
  switch (name) {
    case InputName.Close:
      return WhenExpression.FocusFindWidgetCloseButton
    case InputName.FocusNext:
      return WhenExpression.FocusFindWidgetNextMatchButton
    case InputName.FocusPrevious:
      return WhenExpression.FocusFindWidgetPreviousMatchButton
    case InputName.MatchCase:
      return WhenExpression.FocusSearchMatchCase
    case InputName.MatchWholeWord:
      return WhenExpression.FocusSearchWholeWord
    case InputName.PreserveCase:
      return WhenExpression.FocusSearchPreserveCase
    case InputName.Replace:
      return WhenExpression.FocusFindWidgetReplaceButton
    case InputName.ReplaceAll:
      return WhenExpression.FocusFindWidgetReplaceAllButton
    case InputName.ReplaceValue:
      return WhenExpression.FocusSearchReplaceInput
    case InputName.SearchValue:
      return WhenExpression.FocusSearchInput
    case InputName.ToggleReplace:
      return WhenExpression.FocusToggleReplace
    case InputName.UseRegularExpression:
      return WhenExpression.FocusSearchRegex
    default:
      return WhenExpression.Empty
  }
}
