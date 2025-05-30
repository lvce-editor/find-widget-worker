import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const close = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { editorUid } = state
  // @ts-ignore
  await EditorWorker.invoke('Editor.closeFind2', editorUid)
  return state
}
