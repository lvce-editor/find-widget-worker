import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import * as Close from '../Close/Close.ts'

export const handleClickClose = (state: FindWidgetState): Promise<FindWidgetState> => {
  return Close.close(state)
}
