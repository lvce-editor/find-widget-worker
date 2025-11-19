import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { Change } from '../TextEdit/TextEdit.ts'

export const applyEdits = async (editorId: number, edits: readonly Change[]): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.applyDocumentEdits', editorId, edits)
}
