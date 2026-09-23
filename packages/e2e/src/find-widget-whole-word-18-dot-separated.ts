import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-18-dot-separated'
export const test = createFindTest({ content: 'row rows arrow row.row', matchCount: 3, query: 'row', wholeWord: true })
