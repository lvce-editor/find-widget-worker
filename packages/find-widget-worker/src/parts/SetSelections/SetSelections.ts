import { EditorWorker } from '@lvce-editor/rpc-registry'

export const setSelections = async (editorUid: number, selections: Uint32Array): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.setSelections2', editorUid, selections)
}
