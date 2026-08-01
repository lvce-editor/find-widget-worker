import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-07-number'
export const test = createFindTest({ content: '42 420 x42 42x 42', query: '42', matchCount: 2, wholeWord: true })
