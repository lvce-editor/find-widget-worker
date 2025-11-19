import { EditorWorker } from '@lvce-editor/rpc-registry'

export const getLines = async (editorUid: number): Promise<readonly string[]> => {
  // @ts-ignore
  const lines = await EditorWorker.invoke('Editor.getLines2', editorUid)
  // @ts-ignore
  return lines
}
