import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-11-across-lines'
export const test = createFindTest({ content: 'word\nwording\na word here\nword', matchCount: 3, query: 'word', wholeWord: true })
