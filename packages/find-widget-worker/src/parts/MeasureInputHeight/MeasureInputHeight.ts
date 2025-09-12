import { measureTextHeight } from '../MeasureTextHeight/MeasureTextHeight.ts'

export interface HeightMeasurement {
  readonly height: number
  readonly inputHeight: number
  readonly replaceInputHeight: number
}

export const measureInputHeight = (
  value: string,
  inputLineHeight: number,
  inputPaddingBottom: number,
  inputPaddingTop: number,
  replaceExpanded: boolean,
): HeightMeasurement => {
  const textHeight = measureTextHeight(value, inputLineHeight)
  const inputHeight = textHeight + inputPaddingBottom + inputPaddingTop
  const replaceInputHeight = replaceExpanded ? inputHeight : 0 // TODO should be independent of input
  // TODO use variables for margin
  const height = inputHeight + replaceInputHeight + 5
  return {
    inputHeight,
    height,
    replaceInputHeight,
  }
}
