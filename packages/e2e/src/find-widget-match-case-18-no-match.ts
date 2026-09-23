import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-18-no-match'
export const test = createFindTest({ content: 'lowercase only', matchCase: true, matchCount: 0, query: 'LOWERCASE' })
