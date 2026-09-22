import type { Bounds } from '../Bounds/Bounds.ts'

export const getFindWidgetPosition = (editorX: number, editorY: number, editorWidth: number, width = 300): Bounds => {
  const height = 30
  const paddingTop = 10
  const paddingRight = 20
  const x = editorX + editorWidth - width - paddingRight
  const y = editorY + paddingTop
  return {
    height,
    width,
    x,
    y,
  }
}
