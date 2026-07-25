import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { newState, oldState } = FindWidgetStates.get(uid)
  FindWidgetStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}

export const renderInstance = (instanceId: string, diffResult: readonly number[]): readonly any[] => {
  const uid = FindWidgetStates.resolveUid(instanceId)
  if (uid === undefined) {
    return []
  }
  return render2(uid, diffResult)
}
