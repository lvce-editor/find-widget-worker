export const getSelectedText = (lines: readonly string[], selections: readonly number[]): string => {
  if (selections.length === 0) {
    return ''
  }
  const startRowIndex = selections[0]
  const startColumnIndex = selections[1]
  const endColumnIndex = selections[3]
  const line = lines[startRowIndex]
  const value = line.slice(startColumnIndex, endColumnIndex)
  return value
}
