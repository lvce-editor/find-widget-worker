import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const handleBlur = async (state: FindWidgetState): Promise<FindWidgetState> => {
  return {
    ...state,
    focus: 0,
    focused: false,
  }
}
