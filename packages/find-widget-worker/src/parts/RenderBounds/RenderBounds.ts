import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderBounds = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { x, y, width, height, uid } = newState
  return [RenderMethod.SetBounds, uid, x, y, width, height]
}
