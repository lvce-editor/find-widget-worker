import { ViewletCommand } from '@lvce-editor/constants'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const renderCss = (oldState: FindWidgetState, newState: FindWidgetState): readonly any[] => {
  const { uid, width, height, x, y, inputHeight } = newState
  const css = `:root {
    --FindWidgetWidth: ${width}px;
    --FindWidgetHeight: ${height}px;
    --FindWidgetX: ${x}px;
    --FindWidgetY: ${y}px;
    --FindWidgetInputHeight: ${inputHeight}px;
  }`
  return [ViewletCommand.SetCss, uid, css]
}
