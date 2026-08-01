import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-09-line-end'
export const test = createFindTest({ content: 'end ending weekend end.', query: 'end', matchCount: 2, wholeWord: true })
