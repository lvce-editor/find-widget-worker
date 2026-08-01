import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-19-single-character-compound'
export const test = createFindTest({ content: 'x x1 1x x-x X', query: 'x', matchCount: 4, wholeWord: true })
