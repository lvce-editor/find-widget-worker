import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-02-lowercase'
export const test = createFindTest({ content: 'alpha ALPHA Alpha alpha', query: 'alpha', matchCount: 2, matchCase: true })
