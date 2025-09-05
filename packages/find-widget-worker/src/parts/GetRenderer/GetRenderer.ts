import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderBounds from '../RenderBounds/RenderBounds.ts'
import * as RenderContent from '../RenderContent/RenderContent.ts'
import { renderCss } from '../RenderCss/RenderCss.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as RenderFocus from '../RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../RenderFocusContext/RenderFocusContext.ts'
import { renderReplaceValue } from '../RenderReplaceValue/RenderReplaceValue.ts'
import * as RenderUid from '../RenderUid/RenderUid.ts'
import * as RenderValue from '../RenderValue/RenderValue.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderContent:
      return RenderContent.renderContent
    case DiffType.RenderBounds:
      return RenderBounds.renderBounds
    case DiffType.RenderEventListeners:
      return RenderEventListeners.renderEventListeners
    case DiffType.RenderUid:
      return RenderUid.renderUid
    case DiffType.RenderFocusContext:
      return RenderFocusContext.renderFocusContext
    case DiffType.RenderFocus:
      return RenderFocus.renderFocus
    case DiffType.RenderValue:
      return RenderValue.renderValue
    case DiffType.RenderReplaceValue:
      return renderReplaceValue
    case DiffType.RenderCss:
      return renderCss
    default:
      throw new Error('unknown renderer')
  }
}
