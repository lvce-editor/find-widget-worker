import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FocusSource from '../FocusSource/FocusSource.ts'

export const createDefaultState = (): FindWidgetState => {
  return {
    uid: 0,
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
    editorUid: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    focused: false,
    focusSource: FocusSource.Unknown,
    focus: 0,
    version: 0,
  }
}
