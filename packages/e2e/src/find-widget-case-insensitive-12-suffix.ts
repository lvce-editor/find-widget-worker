// cspell:ignore ENDSUFFIX endsuffix
import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-12-suffix'
export const test = createFindTest({ content: 'endSUFFIX ENDSUFFIX endsuffix', matchCount: 3, query: 'suffix' })
