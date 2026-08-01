import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-01-cat'
export const test = createFindTest({ content: 'cat scatter catfish cat', query: 'cat', matchCount: 2, wholeWord: true })
