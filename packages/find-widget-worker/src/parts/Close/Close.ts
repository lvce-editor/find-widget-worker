import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const close = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { editorUid } = state
  // @ts-ignore
  await EditorWorker.invoke('Editor.closeFind2', editorUid)
  return state
}
