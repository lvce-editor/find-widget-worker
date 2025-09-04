import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const applyEdits = async (editorId: number, edits: readonly any[]): Promise<void> => {
  await EditorWorker.applyEdit(editorId, edits)
}
