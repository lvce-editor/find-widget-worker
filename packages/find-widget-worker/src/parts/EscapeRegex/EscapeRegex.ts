export const escapeRegExpCharacters = (value: string): string => {
  // @ts-ignore
  return RegExp.escape(value)
}
