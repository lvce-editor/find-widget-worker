import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export interface Renderer {
  (oldState: FindWidgetState, newState: FindWidgetState): readonly any[]
}
