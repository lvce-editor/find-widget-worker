import { test, expect } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderBounds from '../src/parts/RenderBounds/RenderBounds.ts'
import * as RenderContent from '../src/parts/RenderContent/RenderContent.ts'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'
import * as RenderFocusContext from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import { renderReplaceValue } from '../src/parts/RenderReplaceValue/RenderReplaceValue.ts'
import * as RenderUid from '../src/parts/RenderUid/RenderUid.ts'
import * as RenderValue from '../src/parts/RenderValue/RenderValue.ts'
import * as RenderCss from '../src/parts/RenderCss/RenderCss.ts'

test('getRenderer returns correct renderer for RenderContent', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderContent)
  expect(renderer).toBe(RenderContent.renderContent)
})

test('getRenderer returns correct renderer for RenderBounds', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderBounds)
  expect(renderer).toBe(RenderBounds.renderBounds)
})

test('getRenderer returns correct renderer for RenderEventListeners', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderEventListeners)
  expect(renderer).toBe(RenderEventListeners.renderEventListeners)
})

test('getRenderer returns correct renderer for RenderUid', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderUid)
  expect(renderer).toBe(RenderUid.renderUid)
})

test('getRenderer returns correct renderer for RenderFocusContext', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocusContext)
  expect(renderer).toBe(RenderFocusContext.renderFocusContext)
})

test('getRenderer returns correct renderer for RenderFocus', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocus)
  expect(renderer).toBe(RenderFocus.renderFocus)
})

test('getRenderer returns correct renderer for RenderValue', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderValue)
  expect(renderer).toBe(RenderValue.renderValue)
})

test('getRenderer returns correct renderer for RenderReplaceValue', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderReplaceValue)
  expect(renderer).toBe(renderReplaceValue)
})

test('getRenderer returns correct renderer for RenderCss', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderCss)
  expect(renderer).toBe(RenderCss.renderCss)
})

test('getRenderer throws error for unknown diff type', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})
