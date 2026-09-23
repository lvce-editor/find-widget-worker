import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-14-dot-and-hyphen'
export const test = createFindTest({ content: 'log console.log log-file logger', matchCount: 3, query: 'log', wholeWord: true })
