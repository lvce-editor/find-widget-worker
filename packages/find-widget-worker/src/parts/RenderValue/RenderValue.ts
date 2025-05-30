import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid } = newState
  return [/* method */ 'Viewlet.setValueByName', uid, InputName.SearchValue]
}
