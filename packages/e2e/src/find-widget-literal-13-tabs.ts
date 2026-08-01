import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-13-tabs'
export const test = createFindTest({ content: 'a\tb\ta\tb', query: '\t', matchCount: 3 })
