import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const isEqual = (oldState: FindWidgetState, newState: FindWidgetState): boolean => {
  return (
    newState.width === newState.width &&
    oldState.height === newState.height &&
    oldState.x === newState.x &&
    oldState.inputHeight === newState.inputHeight
  )
}
