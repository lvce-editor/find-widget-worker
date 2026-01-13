import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getSelections = async (editorUid: number): Promise<readonly number[]> => {
  const selections = await EditorWorker.getSelections(editorUid)
  return selections
}
