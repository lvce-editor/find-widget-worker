import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const handleResizerPointerMove = async (state: FindWidgetState, eventX: number, eventY: number): Promise<FindWidgetState> => {
  const { width, x } = state
  const oldXEnd = x + width
  const newWidth = oldXEnd - eventX
  return {
    ...state,
    x: eventX,
    width: newWidth,
  }
}
