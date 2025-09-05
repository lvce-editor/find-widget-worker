export interface RestoredState {
  readonly value: string
  readonly replacement: string
}

const getSavedValue = (savedState: any): string => {
  if (savedState && savedState.value) {
    return savedState.value
  }
  return ''
}

const getSavedReplacement = (savedState: any): string => {
  if (savedState && savedState.replacement) {
    return savedState.replacement
  }
  return ''
}

export const restoreState = (savedState: any): RestoredState => {
  const value = getSavedValue(savedState)
  const replacement = getSavedReplacement(savedState)

  return {
    value,
    replacement,
  }
}
