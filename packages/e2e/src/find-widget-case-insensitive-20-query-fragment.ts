import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-20-query-fragment'
export const test = createFindTest({ content: 'Searchable SEARCHABLE searchable', query: 'arch', matchCount: 3 })
