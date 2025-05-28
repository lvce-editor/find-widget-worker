import * as Diff from '../Diff/Diff.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { oldState, newState } = FindWidgetStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
