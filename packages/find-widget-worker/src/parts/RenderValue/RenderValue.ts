import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderValue = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid, value } = newState
  return [ViewletCommand.SetValueByName, uid, InputName.SearchValue, value]
}
