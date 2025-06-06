import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as SetSelections from '../SetSelections/SetSelections.ts'

export const focusIndex = async (state: FindWidgetState, index: number): Promise<FindWidgetState> => {
  const { matchIndex, matches, editorUid, value } = state
  if (index === matchIndex) {
    return state
  }
  // // TODO find next match and highlight it
  const matchRowIndex = matches[index * 2]
  const matchColumnIndex = matches[index * 2 + 1]
  const newSelections = new Uint32Array([matchRowIndex, matchColumnIndex, matchRowIndex, matchColumnIndex + value.length])
  await SetSelections.setSelections(editorUid, newSelections)
  return {
    ...state,
    matchIndex: index,
    selections: [...newSelections],
  }
}

export const focusFirst = (state: FindWidgetState): Promise<FindWidgetState> => {
  return focusIndex(state, 0)
}

export const focusLast = (state: FindWidgetState): Promise<FindWidgetState> => {
  const { matchCount } = state
  return focusIndex(state, matchCount - 1)
}

export const focusNext = (state: FindWidgetState): Promise<FindWidgetState> => {
  const { matchIndex, matchCount } = state
  if (matchIndex === matchCount - 1) {
    return focusFirst(state)
  }
  return focusIndex(state, matchIndex + 1)
}

export const focusPrevious = (state: FindWidgetState): Promise<FindWidgetState> => {
  const { matchIndex } = state
  if (matchIndex === 0) {
    return focusLast(state)
  }
  return focusIndex(state, matchIndex - 1)
}
