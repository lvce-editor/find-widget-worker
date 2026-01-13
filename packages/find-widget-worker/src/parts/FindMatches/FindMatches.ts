import type { FindOptions } from '../FindOptions/FindOptions.ts'
import { buildRegex } from '../BuildRegex/BuildRegex.ts'
import * as FindRegexMatches from '../FindRegexMatches/FindRegexMatches.ts'

interface FindMatchesResult {
  readonly error: string
  readonly matches: Uint32Array
}

export const findMatches = (lines: readonly string[], searchString: string, options: FindOptions): FindMatchesResult => {
  if (searchString.length === 0) {
    return {
      error: '',
      matches: new Uint32Array([]),
    }
  }
  const { error, regex } = buildRegex(searchString, options)
  if (error) {
    return {
      error,
      matches: new Uint32Array([]),
    }
  }
  const matches = FindRegexMatches.findRegexMatches(lines, regex)
  return {
    error: '',
    matches,
  }
}
