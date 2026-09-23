import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-09-line-end'
export const test = createFindTest({ content: 'end ending weekend end.', matchCount: 2, query: 'end', wholeWord: true })
