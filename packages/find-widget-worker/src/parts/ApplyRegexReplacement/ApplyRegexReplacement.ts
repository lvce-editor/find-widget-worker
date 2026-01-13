/**
 * Apply regex replacement with back-reference substitution ($1, $2, etc.)
 */
export const applyRegexReplacement = (originalText: string, regex: RegExp, replacement: string): string => {
  // Create a non-global version of the regex to get capture groups
  const flags = regex.flags.replace('g', '')
  const nonGlobalRegex = new RegExp(regex.source, flags)
  const match = nonGlobalRegex.exec(originalText)

  if (!match) {
    return replacement
  }

  // Replace $n back-references with captured groups
  let result = replacement

  // Handle $& (entire match)
  result = result.replaceAll('$&', match[0])

  // Handle $` (text before match) - in this context it's empty since we're matching the whole text
  result = result.replaceAll('$`', '')

  // Handle $' (text after match) - in this context it's empty since we're matching the whole text
  result = result.replaceAll("$'", '')

  // Handle $$ (literal $)
  result = result.replaceAll('$$', '\u0000DOLLAR\u0000')

  // Handle $n and $nn (numbered capture groups)
  result = result.replaceAll(/\$(\d{1,2})/g, (_match, groupNumber) => {
    const index = Number.parseInt(groupNumber, 10)
    if (index < match.length) {
      return match[index] ?? ''
    }
    return `$${groupNumber}`
  })

  // Restore literal $
  result = result.replaceAll('\u0000DOLLAR\u0000', '$')

  return result
}
