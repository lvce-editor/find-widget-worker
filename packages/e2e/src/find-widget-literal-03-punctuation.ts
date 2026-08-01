import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-03-punctuation'
export const test = createFindTest({ content: 'error: one\nwarning: two\nerror: three', query: 'error:', matchCount: 2 })
