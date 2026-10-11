export interface RestoredState {
  readonly hasValue: boolean
  readonly matchCase: boolean
  readonly matchWholeWord: boolean
  readonly preserveCase: boolean
  readonly replaceExpanded: boolean
  readonly replacement: string
  readonly useRegularExpression: boolean
  readonly value: string
  readonly width: number | undefined
}
