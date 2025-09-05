import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const handleResizerPointerUp = async (state: FindWidgetState, eventX: number, eventY: number): Promise<FindWidgetState> => {
  return {
    ...state,
    resizerPointerDown: false,
  }
}
