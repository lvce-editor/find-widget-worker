export const escapeRegExpCharacters = (value: string): string => {
  return RegExp.escape(value)
}
