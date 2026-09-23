import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-19-letter-digit'
export const test = createFindTest({ content: 'v2 V2 v2', matchCase: true, matchCount: 2, query: 'v2' })
