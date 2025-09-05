import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export interface ClickHandler {
  (state: FindWidgetState): FindWidgetState | Promise<FindWidgetState>
}
