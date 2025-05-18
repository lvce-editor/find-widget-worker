import * as ColorPickerStates from '../FindWidgetStates/FindWidgetStates.ts'
import * as Diff from '../Diff/Diff.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = ColorPickerStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
