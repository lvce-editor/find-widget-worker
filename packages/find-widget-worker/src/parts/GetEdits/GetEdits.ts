import type { TextEdit } from '../TextEdit/TextEdit.ts'
import { preserveCase } from '../PreserveCase/PreserveCase.ts'

export const getEdits = (
  matches: Uint32Array,
  value: string,
  replacement: string,
  startIndex: number,
  replaceAll: boolean,
  lines: readonly string[],
  preserveCaseOption: boolean = false,
): readonly TextEdit[] => {
  if (value.length === 0 || matches.length === 0) {
    return []
  }

  const edits: TextEdit[] = []
  const totalMatches: number = Math.floor(matches.length / 3)
  const fromIndex: number = replaceAll ? 0 : Math.max(0, startIndex)
  const toIndex: number = replaceAll ? totalMatches : Math.min(totalMatches, fromIndex + 1)

  for (let i = fromIndex; i < toIndex; i++) {
    const rowIndex: number = matches[i * 3]
    const startColumnIndex: number = matches[i * 3 + 1]
    const matchLength: number = matches[i * 3 + 2]
    const endColumnIndex: number = startColumnIndex + matchLength

    // Get the original text that was matched
    const originalText: string = lines[rowIndex].slice(startColumnIndex, endColumnIndex)

    // Apply case preservation if enabled
    const finalReplacement: string = preserveCaseOption ? preserveCase(originalText, replacement) : replacement

    // Convert row/column positions to character offsets
    let startOffset: number = 0
    for (let row = 0; row < rowIndex; row++) {
      startOffset += lines[row].length + 1 // +1 for newline character
    }
    startOffset += startColumnIndex

    let endOffset: number = 0
    for (let row = 0; row < rowIndex; row++) {
      endOffset += lines[row].length + 1 // +1 for newline character
    }
    endOffset += endColumnIndex

    edits.push({
      endOffset,
      inserted: finalReplacement,
      origin: 'find-widget.replace',
      startOffset,
    })
  }
  return edits
}
