import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-08-dot-suffix'
export const test = createFindTest({ content: 'first.end second.end ending', query: '.end', matchCount: 2 })
