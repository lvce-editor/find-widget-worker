import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return oldState.focus === newState.focus
}
