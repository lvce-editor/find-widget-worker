import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'
import { getClickHandler } from '../GetClickHandler/GetClickHandler.ts'

export const handleClickButton = async (state: FindWidgetState, name: string): Promise<FindWidgetState> => {
  const fn = getClickHandler(name)
  return fn(state)
}
