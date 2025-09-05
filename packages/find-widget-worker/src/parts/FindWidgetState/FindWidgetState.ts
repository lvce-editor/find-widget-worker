export interface FindWidgetState {
  readonly ariaAnnouncement: string
  readonly disposed?: boolean // TODO make field required
  readonly editorHeight: number
  readonly editorUid: number
  readonly editorWidth: number
  readonly editorX: number
  readonly editorY: number
  readonly focus: number
  readonly focused: boolean
  readonly focusSource: number
  readonly height: number
  readonly inputSource: number
  readonly lines: readonly string[]
  readonly matchCase: boolean
  readonly matchCount: number
  readonly matches: Uint32Array
  readonly matchIndex: number
  readonly matchWholeWord: boolean
  readonly preserveCase: boolean
  readonly replaceExpanded: boolean
  readonly replacement: string
  readonly resizerPointerDown: boolean
  readonly selections: readonly number[]
  readonly uid: number
  readonly useRegularExpression: boolean
  readonly value: string
  readonly version: number
  readonly width: number
  readonly minWidth: number
  readonly x: number
  readonly y: number
  readonly history: readonly string[]
}
