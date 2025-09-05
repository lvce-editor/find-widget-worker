import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

const getNewWidth = (oldWidth: number, oldX: number, eventX: number, minWidth: number): number => {
  const oldXEnd = oldX + oldWidth
  const newWidth = Math.max(oldXEnd - eventX, minWidth)
  return newWidth
}

export const handleResizerPointerMove = async (state: FindWidgetState, eventX: number, eventY: number): Promise<FindWidgetState> => {
  const { width, x, resizerPointerDown, minWidth } = state
  if (!resizerPointerDown) {
    return state
  }
  const newWidth = getNewWidth(width, x, eventX, minWidth)
  return {
    ...state,
    x: eventX,
    width: newWidth,
  }
}
