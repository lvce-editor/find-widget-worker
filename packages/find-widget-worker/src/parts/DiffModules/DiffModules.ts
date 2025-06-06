import * as DiffBounds from '../DiffBounds/DiffBounds.ts'
import * as DiffEventListeners from '../DiffEventListeners/DiffEventListeners.ts'
import * as DiffFocusContext from '../DiffFocusContext/DiffFocusContext.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'
import * as DiffParentUid from '../DiffParentUid/DiffParentUid.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as DiffValue from '../DiffValue/DiffValue.ts'

export const modules = [
  DiffEventListeners.isEqual,
  DiffItems.isEqual,
  DiffBounds.isEqual,
  DiffParentUid.isEqual,
  DiffFocusContext.isEqual,
  DiffFocusContext.isEqual,
  DiffValue.isEqual,
]

export const numbers = [
  DiffType.RenderEventListeners,
  DiffType.RenderContent,
  DiffType.RenderBounds,
  DiffType.RenderUid,
  DiffType.RenderFocusContext,
  DiffType.RenderFocus,
  DiffType.RenderValue,
]
