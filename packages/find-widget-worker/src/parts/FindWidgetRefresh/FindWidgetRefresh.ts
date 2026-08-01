import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefreshWithEditor from '../FindWidgetRefreshWithEditor/FindWidgetRefreshWithEditor.ts'

export const refresh = (state: FindWidgetState, value?: string, inputSource = InputSource.User): FindWidgetState => {
  const { value: currentValue } = state
  const newValue = value === undefined ? currentValue : value
  return FindWidgetRefreshWithEditor.refresh(state, newValue, inputSource)
}
