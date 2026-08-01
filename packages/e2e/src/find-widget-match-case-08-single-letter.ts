import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-08-single-letter'
export const test = createFindTest({ content: 'A a A a', query: 'A', matchCount: 2, matchCase: true })
