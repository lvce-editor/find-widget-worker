import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-11-across-lines'
export const test = createFindTest({ content: 'word\nwording\na word here\nword', query: 'word', matchCount: 3, wholeWord: true })
