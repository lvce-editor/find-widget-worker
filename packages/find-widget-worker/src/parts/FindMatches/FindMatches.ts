import type { FindOptions } from '../FindOptions/FindOptions.ts'
import { buildRegex } from '../BuildRegex/BuildRegex.ts'
import * as FindRegexMatches from '../FindRegexMatches/FindRegexMatches.ts'

export { type FindOptions } from '../FindOptions/FindOptions.ts'

export const findMatches = (lines: readonly string[], searchString: string, options: FindOptions): Uint32Array => {
  if (searchString.length === 0) {
    return new Uint32Array([])
  }
  const regex = buildRegex(searchString, options)
  return FindRegexMatches.findRegexMatches(lines, regex)
}
