import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-15-hyphen'
export const test = createFindTest({ content: 'Pre-Release pre-release Pre-Release', query: 'Pre-Release', matchCount: 2, matchCase: true })
