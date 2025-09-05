import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

interface NewCoordinates {
  readonly newX: number
  readonly newWidth: number
}

const getNewCoordinates = (oldWidth: number, oldX: number, eventX: number, minWidth: number): NewCoordinates => {
  const oldXEnd = oldX + oldWidth
  const newWidth = Math.max(oldXEnd - eventX, minWidth)
  return {
    newWidth,
    newX: eventX,
  }
}

export const handleResizerPointerMove = async (state: FindWidgetState, eventX: number, eventY: number): Promise<FindWidgetState> => {
  const { width, x, resizerPointerDown, minWidth } = state
  if (!resizerPointerDown) {
    return state
  }
  const { newWidth, newX } = getNewCoordinates(width, x, eventX, minWidth)
  return {
    ...state,
    x: newX,
    width: newWidth,
  }
}
