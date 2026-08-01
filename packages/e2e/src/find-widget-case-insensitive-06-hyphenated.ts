import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-06-hyphenated'
export const test = createFindTest({ content: 'CASE-SENSITIVE case-sensitive Case-Sensitive', query: 'case-sensitive', matchCount: 3 })
