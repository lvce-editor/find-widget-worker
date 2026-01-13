import type { FindOptions } from '../FindOptions/FindOptions.ts'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { applyEdits } from '../ApplyEdits/ApplyEdits.ts'
import { getEdits } from '../GetEdits/GetEdits.ts'

export const replaceAll = (state: FindWidgetState): FindWidgetState => {
  const { editorUid, lines, matchCase, matches, matchWholeWord, preserveCase, replacement, useRegularExpression, value } = state
  const options: FindOptions = {
    matchCase,
    matchWholeWord,
    useRegularExpression,
  }
  const edits = getEdits(matches, value, replacement, 0, true, lines, preserveCase, options)
  void applyEdits(editorUid, edits)
  return {
    ...state,
  }
}
