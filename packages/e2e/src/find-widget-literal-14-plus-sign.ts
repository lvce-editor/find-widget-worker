import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-14-plus-sign'
export const test = createFindTest({ content: 'a+b a-b a+b', query: 'a+b', matchCount: 2 })
