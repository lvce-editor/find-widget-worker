import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  if (newState.focusSource === FocusSource.User) {
    return true
  }
  return oldState.focused === newState.focused && oldState.focus === newState.focus && oldState.focusVersion === newState.focusVersion
}
