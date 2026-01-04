import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff from '../Diff/Diff.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'

export const doRender = (uid: number): readonly any[] => {
  const { newState, oldState } = FindWidgetStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
