import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-02-test'
export const test = createFindTest({ content: 'test testing retest test', query: 'test', matchCount: 2, wholeWord: true })
