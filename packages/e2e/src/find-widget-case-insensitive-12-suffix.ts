import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-12-suffix'
export const test = createFindTest({ content: 'endSUFFIX ENDSUFFIX endsuffix', query: 'suffix', matchCount: 3 })
