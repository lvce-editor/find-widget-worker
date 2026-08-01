import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-17-suffix'
export const test = createFindTest({ content: 'oneSuffix twoSuffix threesuffix', query: 'Suffix', matchCount: 2, matchCase: true })
