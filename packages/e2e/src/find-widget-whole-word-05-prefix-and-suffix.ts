import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-05-prefix-and-suffix'
export const test = createFindTest({ content: 'one one1 someone one', query: 'one', matchCount: 2, wholeWord: true })
