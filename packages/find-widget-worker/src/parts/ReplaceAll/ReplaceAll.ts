import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { applyEdits } from '../ApplyEdits/ApplyEdits.ts'
import { getEdits } from '../GetEdits/GetEdits.ts'

export const replaceAll = (state: FindWidgetState): FindWidgetState => {
  const { editorUid, lines, matches, preserveCase, replacement, value } = state
  const edits = getEdits(matches, value, replacement, 0, true, lines, preserveCase)
  void applyEdits(editorUid, edits)
  return {
    ...state,
  }
}
