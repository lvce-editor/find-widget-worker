import type { FindOptions } from '../FindOptions/FindOptions.ts'
import type { TextEdit } from '../TextEdit/TextEdit.ts'
import { applyRegexReplacement } from '../ApplyRegexReplacement/ApplyRegexReplacement.ts'
import { buildRegex } from '../BuildRegex/BuildRegex.ts'
import { preserveCase } from '../PreserveCase/PreserveCase.ts'

export const getEdits = (
  matches: Uint32Array,
  value: string,
  replacement: string,
  startIndex: number,
  replaceAll: boolean,
  lines: readonly string[],
  preserveCaseOption: boolean = false,
  options?: FindOptions,
): readonly TextEdit[] => {
  if (value.length === 0 || matches.length === 0) {
    return []
  }

  const edits: TextEdit[] = []
  const totalMatches: number = Math.floor(matches.length / 3)
  const fromIndex: number = replaceAll ? 0 : Math.max(0, startIndex)
  const toIndex: number = replaceAll ? totalMatches : Math.min(totalMatches, fromIndex + 1)

  // Build regex once if using regular expressions
  let regex: RegExp | undefined
  if (options?.useRegularExpression) {
    const { error, regex: builtRegex } = buildRegex(value, options)
    if (!error) {
      regex = builtRegex
    }
  }

  for (let i = fromIndex; i < toIndex; i++) {
    const rowIndex: number = matches[i * 3]
    const startColumnIndex: number = matches[i * 3 + 1]
    const matchLength: number = matches[i * 3 + 2]
    const endColumnIndex: number = startColumnIndex + matchLength

    // Get the original text that was matched
    const originalText: string = lines[rowIndex].slice(startColumnIndex, endColumnIndex)

    // Apply regex replacement with back-references if enabled
    let finalReplacement: string
    if (options?.useRegularExpression && regex) {
      finalReplacement = applyRegexReplacement(originalText, regex, replacement)
    } else {
      finalReplacement = replacement
    }

    // Apply case preservation if enabled
    if (preserveCaseOption) {
      finalReplacement = preserveCase(originalText, finalReplacement)
    }

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
