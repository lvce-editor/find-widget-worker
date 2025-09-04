import type { FindOptions } from '../FindOptions/FindOptions.ts'
import * as EscapeRegex from '../EscapeRegex/EscapeRegex.ts'

export const buildRegex = (searchString: string, options: FindOptions): RegExp => {
  const { matchCase, useRegularExpression, matchWholeWord } = options
  const flags = matchCase ? 'g' : 'gi'
  const pattern = useRegularExpression ? searchString : EscapeRegex.escapeRegExpCharacters(searchString)
  const wrapped = matchWholeWord ? `\\b(?:${pattern})\\b` : pattern
  return new RegExp(wrapped, flags)
}
