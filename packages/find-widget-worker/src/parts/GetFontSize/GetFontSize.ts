import { EditorWorker } from '@lvce-editor/rpc-registry'
import type { FindWidgetFontSize } from '../NormalizeFontSize/NormalizeFontSize.ts'
import * as NormalizeFontSize from '../NormalizeFontSize/NormalizeFontSize.ts'

export const getFontSize = async (): Promise<FindWidgetFontSize> => {
  try {
    const value = await EditorWorker.invoke('Editor.getFindWidgetFontSize')
    return NormalizeFontSize.normalizeFontSize(value)
  } catch {
    return 'inherit'
  }
}
