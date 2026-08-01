import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-10-line-start'
export const test = createFindTest({ content: 'start restart starting start', query: 'start', matchCount: 2, wholeWord: true })
