import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-03-uppercase'
export const test = createFindTest({ content: 'ID id Id ID', query: 'ID', matchCount: 2, matchCase: true })
