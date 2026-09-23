import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-17-id'
export const test = createFindTest({ content: 'id userId id_ id-id ID', matchCount: 4, query: 'id', wholeWord: true })
