import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { toggleMatchCase } from '../FindWidgetToggleMatchCase/FindWidgetToggleMatchCase.ts'
import { toggleMatchWholeWord } from '../FindWidgetToggleMatchWholeWord/FindWidgetToggleMatchWholeWord.ts'
import { togglePreserveCase } from '../FindWidgetTogglePreserveCase/FindWidgetTogglePreserveCase.ts'
import { toggleUseRegularExpression } from '../FindWidgetToggleUseRegularExpression/FindWidgetToggleUseRegularExpression.ts'
import * as InputName from '../InputName/InputName.ts'
import { replace } from '../Replace/Replace.ts'
import { replaceAll } from '../ReplaceAll/ReplaceAll.ts'

interface ClickHandler {
  (state: FindWidgetState): FindWidgetState | Promise<FindWidgetState>
}

export const getClickHandler = (name: string): ClickHandler => {
  switch (name) {
    case InputName.Replace:
      return replace
    case InputName.ReplaceAll:
      return replaceAll
    case InputName.MatchCase:
      return toggleMatchCase
    case InputName.MatchWholeWord:
      return toggleMatchWholeWord
    case InputName.UseRegularExpression:
      return toggleUseRegularExpression
    case InputName.PreserveCase:
      return togglePreserveCase
    default:
      throw new Error(`unexpected click`)
  }
}
