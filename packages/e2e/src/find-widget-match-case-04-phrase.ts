import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-04-phrase'
export const test = createFindTest({ content: 'Hello World hello world Hello world', query: 'Hello World', matchCount: 1, matchCase: true })
