import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as InputName from '../InputName/InputName.ts'

export const renderReplaceValue = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { replacement, uid } = newState
  return [ViewletCommand.SetValueByName, uid, InputName.ReplaceValue, replacement]
}
