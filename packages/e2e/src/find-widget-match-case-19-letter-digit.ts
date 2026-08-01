import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-19-letter-digit'
export const test = createFindTest({ content: 'v2 V2 v2', query: 'v2', matchCount: 2, matchCase: true })
