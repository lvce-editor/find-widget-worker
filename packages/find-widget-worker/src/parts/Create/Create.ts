import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number, parentUid: number): FindWidgetState => {
  const state: FindWidgetState = {
    uid,
    value: '',
    ariaAnnouncement: '',
    matches: new Uint32Array(),
    matchIndex: -1,
    matchCount: 0,
    replaceExpanded: false,
    useRegularExpression: false,
    matchCase: false,
    matchWholeWord: false,
    replacement: '',
    editorUid: parentUid,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    focused: false,
    focusSource: FocusSource.Unknown,
    focus: 0,
    version: 0,
    lines: [],
    selections: [],
    editorX: x,
    editorY: y,
    editorWidth: width,
    editorHeight: height,
    inputSource: 0,
  }
  FindWidgetStates.set(uid, state, state)
  return state
}
