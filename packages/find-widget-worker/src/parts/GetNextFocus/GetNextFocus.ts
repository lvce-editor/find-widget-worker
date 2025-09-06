import { WhenExpression } from '@lvce-editor/constants'

export const getNextFocus = (focus: number, replaceExpanded: boolean): number => {
  switch (focus) {
    case WhenExpression.FocusToggleReplace:
      return WhenExpression.FocusSearchInput
    case WhenExpression.FocusSearchInput:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchReplaceInput
      }
      return WhenExpression.FocusSearchMatchCase
    case WhenExpression.FocusSearchMatchCase:
      return WhenExpression.FocusSearchWholeWord
    case WhenExpression.FocusSearchWholeWord:
      return WhenExpression.FocusSearchRegex
    case WhenExpression.FocusSearchRegex:
      if (replaceExpanded) {
        return WhenExpression.FocusSearchPreserveCase
      }
      return WhenExpression.FocusToggleDetails
    case WhenExpression.FocusSearchReplaceInput:
      return WhenExpression.FocusSearchMatchCase
    case WhenExpression.FocusSearchPreserveCase:
      return WhenExpression.FocusSearchReplaceAll
    case WhenExpression.FocusSearchReplaceAll:
      return WhenExpression.FocusToggleDetails
    case WhenExpression.FocusSearchIncludeInput:
      return WhenExpression.FocusSearchOpenEditors
    case WhenExpression.FocusSearchOpenEditors:
      return WhenExpression.FocusSearchExcludeInput
    case WhenExpression.FocusSearchExcludeInput:
      return WhenExpression.FocusIgnoreFiles
    case WhenExpression.FocusToggleDetails:
      return WhenExpression.FocusSearchIncludeInput
    default:
      return focus
  }
}
