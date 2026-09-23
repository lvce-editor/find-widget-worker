// cspell:ignore threesuffix
import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-17-suffix'
export const test = createFindTest({ content: 'oneSuffix twoSuffix threesuffix', matchCase: true, matchCount: 2, query: 'Suffix' })
