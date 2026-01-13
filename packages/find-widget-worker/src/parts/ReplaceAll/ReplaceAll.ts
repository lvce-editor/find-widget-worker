import type { FindOptions } from '../FindOptions/FindOptions.ts'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { applyEdits } from '../ApplyEdits/ApplyEdits.ts'
import { getEdits } from '../GetEdits/GetEdits.ts'
import { updateAfterReplace } from '../UpdateAfterReplace/UpdateAfterReplace.ts'

export const replaceAll = async (state: FindWidgetState): Promise<FindWidgetState> => {
  const { editorUid, lines, matchCase, matches, matchWholeWord, preserveCase, replacement, useRegularExpression, value } = state
  const options: FindOptions = {
    matchCase,
    matchWholeWord,
    useRegularExpression,
  }
  const edits = getEdits(matches, value, replacement, 0, true, lines, preserveCase, options)
  await applyEdits(editorUid, edits)
  return updateAfterReplace(state, 0)
}
