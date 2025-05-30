import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return newState.inputSource === InputSource.User || oldState.value === newState.value
}
