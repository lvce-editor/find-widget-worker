import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const handleReplaceInput = (state: FindWidgetState, value: string, inputSource = InputSource.User): FindWidgetState => {
  return {
    ...state,
    replacement: value,
    inputSource,
  }
}
