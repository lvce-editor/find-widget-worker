import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

interface Dimensions {
  readonly height: number
  readonly width: number
  readonly x: number
  readonly y: number
}

export const resize = async (state: FindWidgetState, dimensions: Dimensions): Promise<FindWidgetState> => {
  return state
}
