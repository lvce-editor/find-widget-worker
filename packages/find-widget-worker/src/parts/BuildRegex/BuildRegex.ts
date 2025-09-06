import type { FindOptions } from '../FindOptions/FindOptions.ts'
import * as EscapeRegex from '../EscapeRegex/EscapeRegex.ts'

interface BuildRegexResult {
  readonly regex: RegExp
  readonly error: string
}

export const buildRegex = (searchString: string, options: FindOptions): BuildRegexResult => {
  const { matchCase, useRegularExpression, matchWholeWord } = options
  const flags = matchCase ? 'g' : 'gi'
  const pattern = useRegularExpression ? searchString : EscapeRegex.escapeRegExpCharacters(searchString)
  const wrapped = matchWholeWord ? `\\b(?:${pattern})\\b` : pattern
  try {
    const regex = new RegExp(wrapped, flags)
    return {
      regex,
      error: '',
    }
  } catch (error) {
    return {
      regex: new RegExp(''),
      error: `${error}`,
    }
  }
}
