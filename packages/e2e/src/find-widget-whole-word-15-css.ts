import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-15-css'
export const test = createFindTest({ content: 'css scss css3 css-grid css', query: 'css', matchCount: 3, wholeWord: true })
