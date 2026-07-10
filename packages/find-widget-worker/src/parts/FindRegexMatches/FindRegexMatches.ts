export const findRegexMatches = (lines: readonly string[], regex: RegExp): Uint32Array => {
  if (!regex.global) {
    throw new Error('regex must be global')
  }
  const { length } = lines
  const matches = []
  const collectMatchesForLine = (line: string, lineIndex: number): void => {
    let lastMatch = regex.exec(line)
    while (lastMatch) {
      matches.push(lineIndex, lastMatch.index, lastMatch[0].length)
      lastMatch = regex.exec(line)
    }
  }

  for (let i = 0; i < length; i++) {
    collectMatchesForLine(lines[i], i)
  }

  return new Uint32Array(matches)
}
