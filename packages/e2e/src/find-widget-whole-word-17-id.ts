import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-17-id'
export const test = createFindTest({ content: 'id userId id_ id-id ID', query: 'id', matchCount: 4, wholeWord: true })
