import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as GetFindWidgetPosition from '../GetFindWidgetPosition/GetFindWidgetPosition.ts'

interface Dimensions {
  readonly height: number
  readonly width: number
  readonly x: number
  readonly y: number
}

export const resize = async (state: FindWidgetState, dimensions: Dimensions): Promise<FindWidgetState> => {
  const { height: editorHeight, width: editorWidth, x: editorX, y: editorY } = dimensions
  const { width: widgetWidth } = state
  const position = GetFindWidgetPosition.getFindWidgetPosition(editorX, editorY, editorWidth, widgetWidth)
  return {
    ...state,
    editorHeight,
    editorWidth,
    editorX,
    editorY,
    x: position.x,
    y: position.y,
  }
}
