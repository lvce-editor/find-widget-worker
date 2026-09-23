import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-12-null'
export const test = createFindTest({ content: 'null nullable nullValue null', matchCount: 2, query: 'null', wholeWord: true })
