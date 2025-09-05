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
  let value = getSavedValue(savedState)
  let replacement = getSavedReplacement(savedState)

  return {
    value,
    replacement,
  }
}
