import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-20-no-whole-match'
export const test = createFindTest({ content: 'foobar barfoo', matchCount: 0, query: 'foo', wholeWord: true })
