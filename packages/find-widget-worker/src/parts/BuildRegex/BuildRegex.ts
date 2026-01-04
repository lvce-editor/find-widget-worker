import type { FindOptions } from '../FindOptions/FindOptions.ts'
import * as EscapeRegex from '../EscapeRegex/EscapeRegex.ts'

interface BuildRegexResult {
  readonly error: string
  readonly regex: RegExp
}

export const buildRegex = (searchString: string, options: FindOptions): BuildRegexResult => {
  const { matchCase, matchWholeWord, useRegularExpression } = options
  const flags = matchCase ? 'g' : 'gi'
  const pattern = useRegularExpression ? searchString : EscapeRegex.escapeRegExpCharacters(searchString)
  const wrapped = matchWholeWord ? `\\b(?:${pattern})\\b` : pattern
  try {
    const regex = new RegExp(wrapped, flags)
    return {
      error: '',
      regex,
    }
  } catch (error) {
    return {
      error: `${error}`,
      regex: new RegExp(''),
    }
  }
}
