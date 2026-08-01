import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-20-no-whole-match'
export const test = createFindTest({ content: 'foobar barfoo', query: 'foo', matchCount: 0, wholeWord: true })
