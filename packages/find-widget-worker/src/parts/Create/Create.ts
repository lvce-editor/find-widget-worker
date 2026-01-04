import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, parentUid: number): FindWidgetState => {
  const state: FindWidgetState = {
    ariaAnnouncement: '',
    editorHeight: height,
    editorUid: parentUid,
    editorWidth: width,
    editorX: x,
    editorY: y,
    focus: 0,
    focused: false,
    focusSource: FocusSource.Unknown,
    height: 0,
    history: [],
    inputBorderWidth: 1,
    inputErrorMessage: '',
    inputGap: 3,
    inputLineHeight: 15,
    inputPaddingBottom: 4,
    inputPaddingTop: 4,
    inputSource: 0,
    lines: [],
    matchCase: false,
    matchCount: 0,
    matches: new Uint32Array(),
    matchIndex: -1,
    matchWholeWord: false,
    minWidth: 400,
    preserveCase: false,
    replaceExpanded: false,
    replacement: '',
    resizerPointerDown: false,
    searchInputHeight: 15,
    selections: [],
    uid,
    useRegularExpression: false,
    value: '',
    version: 0,
    width: 0,
    x: 0,
    y: 0,
  }
  FindWidgetStates.set(uid, state, state)
  return state
}
