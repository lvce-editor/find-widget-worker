import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const focusElement = (state: FindWidgetState, whenExpression: number): FindWidgetState => {
  return {
    ...state,
    focus: whenExpression,
    focusSource: InputSource.Script,
  }
}
