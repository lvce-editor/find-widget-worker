import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-15-hyphen'
export const test = createFindTest({ content: 'Pre-Release pre-release Pre-Release', matchCase: true, matchCount: 2, query: 'Pre-Release' })
