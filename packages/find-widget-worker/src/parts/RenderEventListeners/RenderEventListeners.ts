import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderEventListeners = (state: FindWidgetState): readonly any[] => {
  const { uid } = state
  const eventListeners = getEventListeners(uid)
  return [RenderMethod.SetEventListeners, uid, eventListeners]
}
