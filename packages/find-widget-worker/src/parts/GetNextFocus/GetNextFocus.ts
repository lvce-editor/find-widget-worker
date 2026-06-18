import { WhenExpression } from '@lvce-editor/constants'

export const getNextFocus = (focus: number, replaceExpanded: boolean): number => {
  switch (focus) {
    case WhenExpression.FocusFindWidget:
    case WhenExpression.FocusSearchInput:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchReplaceInput
      }
      return WhenExpression.FocusSearchMatchCase
    case WhenExpression.FocusSearchExcludeInput:
      return WhenExpression.FocusIgnoreFiles
    case WhenExpression.FocusSearchIncludeInput:
      return WhenExpression.FocusSearchOpenEditors
    case WhenExpression.FocusSearchMatchCase:
      return WhenExpression.FocusSearchWholeWord
    case WhenExpression.FocusSearchOpenEditors:
      return WhenExpression.FocusSearchExcludeInput
    case WhenExpression.FocusSearchPreserveCase:
      return WhenExpression.FocusSearchReplaceAll
    case WhenExpression.FocusSearchRegex:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchPreserveCase
      }
      return WhenExpression.FocusFindWidgetCloseButton
    case WhenExpression.FocusSearchReplaceAll:
      return WhenExpression.FocusToggleDetails
    case WhenExpression.FocusSearchReplaceInput:
      return WhenExpression.FocusSearchMatchCase
    case WhenExpression.FocusSearchWholeWord:
      return WhenExpression.FocusSearchRegex
    case WhenExpression.FocusToggleDetails:
      return WhenExpression.FocusSearchIncludeInput
    case WhenExpression.FocusToggleReplace:
      return WhenExpression.FocusSearchInput
    default:
      return focus
  }
}
