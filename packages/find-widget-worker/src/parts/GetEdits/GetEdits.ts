import type { TextEdit } from '../TextEdit/TextEdit.ts'

export const getEdits = (matches: Uint32Array, value: string, replacement: string, startIndex: number, replaceAll: boolean): readonly TextEdit[] => {
  if (value.length === 0 || matches.length === 0) {
    return []
  }

  const edits: TextEdit[] = []
  const totalMatches: number = Math.floor(matches.length / 2)
  const fromIndex: number = replaceAll ? 0 : Math.max(0, startIndex)
  const toIndex: number = replaceAll ? totalMatches : Math.min(totalMatches, fromIndex + 1)

  for (let i = fromIndex; i < toIndex; i++) {
    const rowIndex: number = matches[i * 2]
    const startColumnIndex: number = matches[i * 2 + 1]
    const endColumnIndex: number = startColumnIndex + value.length
    edits.push({
      start: { rowIndex, columnIndex: startColumnIndex },
      end: { rowIndex, columnIndex: endColumnIndex },
      inserted: [replacement],
      deleted: [value],
      origin: 'find-widget.replace',
    })
  }
  return edits
}
