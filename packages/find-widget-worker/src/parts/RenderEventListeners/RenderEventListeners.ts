import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getEventListeners } from '../GetEventListeners/GetEventListeners.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'
import * as WidgetId from '../WidgetId/WidgetId.ts'

export const renderEventListeners = (state: FindWidgetState): readonly any[] => {
  const { uid } = state
  const eventListeners = getEventListeners(uid, WidgetId.Find)
  return [RenderMethod.SetEventListeners, uid, eventListeners]
}
