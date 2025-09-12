import { measureTextHeight } from '../MeasureTextHeight/MeasureTextHeight.ts'

export const measureInputHeight = (value: string, inputLineHeight: number, inputPaddingBottom: number, inputPaddingTop: number): number => {
  const textHeight = measureTextHeight(value, inputLineHeight)
  const inputHeight = textHeight + inputPaddingBottom + inputPaddingTop
  // TODO use variables for margin
  const height = inputHeight + 5
  return height
}
