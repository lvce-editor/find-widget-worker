import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as InputName from '../InputName/InputName.ts'
import { ViewletCommand } from '@lvce-editor/constants'

export const renderValue = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid, value } = newState
  return [/* method */ ViewletCommand.SetValueByName, uid, InputName.SearchValue, value]
}
