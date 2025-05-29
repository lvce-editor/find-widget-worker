import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

// TODO don't call renderer worker, set editor state
// TODO this function should be synchronous
export const focusIndex = (state: FindWidgetState, index: number): any => {
  const { matchIndex } = state
  if (index === matchIndex) {
    return state
  }
  // TODO update editor
  // const { widgets } = editor
  // const childIndex = widgets.findIndex(isFind)
  // const childWidget = widgets[childIndex]

  // // TODO find next match and highlight it
  // const matchRowIndex = matches[index * 2]
  // const matchColumnIndex = matches[index * 2 + 1]
  // const newSelections = new Uint32Array([matchRowIndex, matchColumnIndex, matchRowIndex, matchColumnIndex + value.length])
  // const newState: FindWidgetState = {
  //   ...findState,
  //   matchIndex: index,
  // }
  // const newWidget = {
  //   ...childWidget,
  //   newState,
  // }
  // const newWidgets = [...widgets.slice(0, childIndex), newWidget, ...widgets.slice(childIndex + 1)]
  return {
    ...state,
    matchIndex: index,
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
