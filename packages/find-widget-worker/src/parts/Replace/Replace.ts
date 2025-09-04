import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { applyEdits } from '../ApplyEdits/ApplyEdits.ts'
import { getEdits } from '../GetEdits/GetEdits.ts'

export const replace = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { lines, value, replacement, editorUid } = state

  const edits = getEdits(lines, value, replacement)
  await applyEdits(editorUid, edits)
  // TODO ask editor worker to apply edit
  // TODO ask editor worker for new lines?
  return {
    ...state,
  }
}
