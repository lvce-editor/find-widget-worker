// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- Appends matches to the shared output array.
const collectMatchesForLineInternal = (matches: number[], line: string, lineIndex: number, regex: RegExp): void => {
  regex.lastIndex = 0
  let lastMatch = regex.exec(line)
  while (lastMatch) {
    matches.push(lineIndex, lastMatch.index, lastMatch[0].length)
    if (lastMatch[0].length === 0) {
      regex.lastIndex = lastMatch.index + 1
    }
    lastMatch = regex.exec(line)
  }
}

export const findRegexMatches = (lines: readonly string[], regex: RegExp): Uint32Array => {
  if (!regex.global) {
    throw new Error('regex must be global')
  }
  const { length } = lines
  const matches: number[] = []

  for (let i = 0; i < length; i++) {
    collectMatchesForLineInternal(matches, lines[i], i, regex)
  }

  return new Uint32Array(matches)
}
