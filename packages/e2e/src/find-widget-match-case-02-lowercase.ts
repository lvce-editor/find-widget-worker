import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-02-lowercase'
export const test = createFindTest({ content: 'alpha ALPHA Alpha alpha', matchCase: true, matchCount: 2, query: 'alpha' })
