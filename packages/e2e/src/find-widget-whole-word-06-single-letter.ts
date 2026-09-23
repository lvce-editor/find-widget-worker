import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-06-single-letter'
export const test = createFindTest({ content: 'a an a-b ba a', matchCount: 3, query: 'a', wholeWord: true })
