import * as Diff from '../Diff/Diff.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = FindWidgetStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}

export const diffInstance = (instanceId: string): readonly number[] => {
  const uid = FindWidgetStates.resolveUid(instanceId)
  if (uid === undefined) {
    return []
  }
  return diff2(uid)
}
