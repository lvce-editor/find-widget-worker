import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-07-punctuation'
export const test = createFindTest({ content: '[Error] [error] [Error]', matchCase: true, matchCount: 2, query: '[Error]' })
