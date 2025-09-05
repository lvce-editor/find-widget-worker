import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

interface Dimensions {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}

export const resize = async (state: FindWidgetState, dimensions: Dimensions): Promise<FindWidgetState> => {
  return state
}
