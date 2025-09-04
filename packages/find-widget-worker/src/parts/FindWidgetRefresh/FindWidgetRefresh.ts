import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefreshWithEditor from '../FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'

export const refresh = (state: FindWidgetState, value = state.value, inputSource = InputSource.User): FindWidgetState => {
  return FindWidgetRefreshWithEditor.refresh(state, value, inputSource)
}
