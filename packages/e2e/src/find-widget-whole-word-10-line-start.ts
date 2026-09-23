import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-10-line-start'
export const test = createFindTest({ content: 'start restart starting start', matchCount: 2, query: 'start', wholeWord: true })
