import { InputSource } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as FindWidgetRefresh from '../FindWidgetRefresh/FindWidgetRefresh.ts'

export const toggleMatchWholeWord = (state: FindWidgetState): FindWidgetState => {
  const { matchWholeWord } = state
  const newState: FindWidgetState = {
    ...state,
    matchWholeWord: !matchWholeWord,
  }
  return FindWidgetRefresh.refresh(newState, newState.value, InputSource.User)
}


