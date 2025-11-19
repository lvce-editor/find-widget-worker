import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getSelections = async (editorUid: number): Promise<readonly number[]> => {
  // @ts-ignore
  const selections = await EditorWorker.invoke('Editor.getSelections2', editorUid)
  // @ts-ignore
  return selections
}
