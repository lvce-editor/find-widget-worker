export const getFindWidgetPosition = (editorX: number, editorY: number, editorWidth: number) => {
  const width = 300
  const height = 30
  const paddingTop = 10
  const paddingRight = 20
  const x = editorX + editorWidth - width - paddingRight
  const y = editorY + paddingTop
  return {
    y,
    x,
    width,
    height,
  }
}
