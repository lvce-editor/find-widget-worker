import type { Change } from '../TextEdit/TextEdit.ts'
import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const applyEdits = async (editorId: number, edits: readonly Change[]): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.applyDocumentEdits', editorId, edits)
}
