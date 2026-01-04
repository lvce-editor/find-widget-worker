import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderUid = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { editorUid, uid } = newState
  return [RenderMethod.SetUid, uid, editorUid]
}
