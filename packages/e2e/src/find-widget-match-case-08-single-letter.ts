import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-08-single-letter'
export const test = createFindTest({ content: 'A a A a', matchCase: true, matchCount: 2, query: 'A' })
