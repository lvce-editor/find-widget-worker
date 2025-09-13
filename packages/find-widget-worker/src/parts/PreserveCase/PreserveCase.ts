/**
 * Preserves the case pattern of the original text when replacing.
 * Supports uppercase, lowercase, PascalCase, and camelCase patterns.
 */
export const preserveCase = (originalText: string, replacementText: string): string => {
  if (originalText.length === 0 || replacementText.length === 0) {
    return replacementText
  }

  // Check if original text is all uppercase
  if (originalText === originalText.toUpperCase()) {
    return replacementText.toUpperCase()
  }

  // Check if original text is all lowercase
  if (originalText === originalText.toLowerCase()) {
    return replacementText.toLowerCase()
  }

  // Check if original text is PascalCase (first letter uppercase, rest lowercase or mixed)
  if (originalText[0] === originalText[0].toUpperCase()) {
    // Check if it's pure PascalCase (first uppercase, rest lowercase)
    const restOfText = originalText.slice(1)
    if (restOfText === restOfText.toLowerCase()) {
      return replacementText[0].toUpperCase() + replacementText.slice(1).toLowerCase()
    }
    // Mixed case - preserve the pattern as much as possible
    return replacementText[0].toUpperCase() + replacementText.slice(1).toLowerCase()
  }

  // Check if original text is camelCase (first letter lowercase, rest mixed)
  if (originalText[0] === originalText[0].toLowerCase()) {
    return replacementText[0].toLowerCase() + replacementText.slice(1).toLowerCase()
  }

  // Default fallback - return replacement as-is
  return replacementText
}
