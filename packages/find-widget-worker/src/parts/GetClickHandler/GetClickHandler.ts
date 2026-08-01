import type { ClickHandler } from '../ClickHandler/ClickHandler.ts'
import * as FindWidgetFocusIndex from '../FindWidgetFocusIndex/FindWidgetFocusIndex.ts'
import { toggleMatchCase } from '../FindWidgetToggleMatchCase/FindWidgetToggleMatchCase.ts'
import { toggleMatchWholeWord } from '../FindWidgetToggleMatchWholeWord/FindWidgetToggleMatchWholeWord.ts'
import { togglePreserveCase } from '../FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'
import { toggleUseRegularExpression } from '../FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'
import * as InputName from '../InputName/InputName.ts'
import { replace } from '../Replace/Replace.ts'
import { replaceAll } from '../ReplaceAll/ReplaceAll.ts'

export const getClickHandler = (name: string): ClickHandler => {
  switch (name) {
    case InputName.FocusNext:
      return FindWidgetFocusIndex.focusNext
    case InputName.FocusPrevious:
      return FindWidgetFocusIndex.focusPrevious
    case InputName.MatchCase:
      return toggleMatchCase
    case InputName.MatchWholeWord:
      return toggleMatchWholeWord
    case InputName.PreserveCase:
      return togglePreserveCase
    case InputName.Replace:
      return replace
    case InputName.ReplaceAll:
      return replaceAll
    case InputName.UseRegularExpression:
      return toggleUseRegularExpression
    default:
      throw new Error(`unexpected click`)
  }
}
