export const measureTextHeight = (value: string, lineHeight: number): number => {
  if (!value) {
    return lineHeight
  }
  // TODO for single line width, can use offscreencanvas to measure text width
  // for multiline text, can ask renderer process to measure text height
  return lineHeight
}
