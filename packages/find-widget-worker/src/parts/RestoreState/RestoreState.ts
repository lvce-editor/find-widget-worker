export interface RestoredState {
  readonly value: string
  readonly replacement: string
}

export const restoreState = (savedState: any): RestoredState => {
  let value = ''
  let replacement = ''

  if (savedState && savedState.value) {
    value = savedState.value
  }
  if (replacement && savedState.replacement) {
    replacement = savedState.replacement
  }

  return {
    value,
    replacement,
  }
}
