import type { FindOptions } from '../FindOptions/FindOptions.ts'
import { buildRegex } from '../BuildRegex/BuildRegex.ts'
import * as FindRegexMatches from '../FindRegexMatches/FindRegexMatches.ts'

export { type FindOptions } from '../FindOptions/FindOptions.ts'

interface FindMatchesResult {
  readonly matches: Uint32Array
  readonly error: string
}

export const findMatches = (lines: readonly string[], searchString: string, options: FindOptions): FindMatchesResult => {
  if (searchString.length === 0) {
    return {
      matches: new Uint32Array([]),
      error: '',
    }
  }
  const regex = buildRegex(searchString, options)
  const matches = FindRegexMatches.findRegexMatches(lines, regex)
  return {
    matches,
    error: '',
  }
}
