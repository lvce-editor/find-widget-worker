import type { RestoredState } from '../RestoredState/RestoredState.ts'

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
    replacement,
    value,
  }
}
