import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-07-punctuation'
export const test = createFindTest({ content: '[Error] [error] [Error]', query: '[Error]', matchCount: 2, matchCase: true })
