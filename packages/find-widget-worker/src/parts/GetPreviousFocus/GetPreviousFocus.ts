import { WhenExpression } from '@lvce-editor/constants'

export const getPreviousFocus = (focus: number, replaceExpanded: boolean): number => {
  switch (focus) {
    case WhenExpression.FocusFindWidgetCloseButton:
      return WhenExpression.FocusSearchRegex
    case WhenExpression.FocusIgnoreFiles:
      return WhenExpression.FocusSearchExcludeInput
    case WhenExpression.FocusSearchExcludeInput:
      return WhenExpression.FocusSearchOpenEditors
    case WhenExpression.FocusSearchIncludeInput:
      return WhenExpression.FocusToggleDetails
    case WhenExpression.FocusSearchInput:
      return WhenExpression.FocusToggleReplace
    case WhenExpression.FocusSearchMatchCase:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchReplaceInput
      }
      return WhenExpression.FocusSearchInput
    case WhenExpression.FocusSearchOpenEditors:
      return WhenExpression.FocusSearchIncludeInput
    case WhenExpression.FocusSearchPreserveCase:
      return WhenExpression.FocusSearchRegex
    case WhenExpression.FocusSearchRegex:
      return WhenExpression.FocusSearchWholeWord
    case WhenExpression.FocusSearchReplaceAll:
      return WhenExpression.FocusSearchPreserveCase
    case WhenExpression.FocusSearchReplaceInput:
      return WhenExpression.FocusSearchInput
    case WhenExpression.FocusSearchWholeWord:
      return WhenExpression.FocusSearchMatchCase
    case WhenExpression.FocusToggleDetails:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchReplaceAll
      }
      return WhenExpression.FocusSearchRegex
    default:
      return focus
  }
}
