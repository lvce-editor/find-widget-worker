import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const renderCss = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { fontSize, height, searchInputHeight: inputHeight, uid, width, x, y } = newState
  const cssFontSize = fontSize === 'inherit' ? 'inherit' : `${fontSize}px`
  const css = `:root {
  --FindWidgetWidth: ${width}px;
  --FindWidgetHeight: ${height}px;
  --FindWidgetX: ${x}px;
  --FindWidgetY: ${y}px;
  --FindWidgetInputHeight: ${inputHeight}px;
  --FindWidgetFontSize: ${cssFontSize};
}`
  return [ViewletCommand.SetCss, uid, css]
}
