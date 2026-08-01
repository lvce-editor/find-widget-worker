import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-18-no-match'
export const test = createFindTest({ content: 'lowercase only', query: 'LOWERCASE', matchCount: 0, matchCase: true })
