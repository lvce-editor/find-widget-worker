export interface FindWidgetState {
  readonly value: string
  readonly ariaAnnouncement: string
  readonly matches: Uint32Array
  readonly matchIndex: number
  readonly matchCount: number
  readonly uid: number
  readonly replaceExpanded: boolean
  readonly useRegularExpression: boolean
  readonly matchCase: boolean
  readonly matchWholeWord: boolean
  readonly replacement: string
  readonly disposed?: boolean // TODO make field required
  readonly editorUid: number
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly focused: boolean
  readonly focusSource: number
  readonly focus: number
  readonly version: number
  readonly lines: readonly string[]
  readonly selections: readonly number[]
}
