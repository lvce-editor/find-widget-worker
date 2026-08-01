import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-01-title-case'
export const test = createFindTest({ content: 'Token token TOKEN Token', query: 'Token', matchCount: 2, matchCase: true })
