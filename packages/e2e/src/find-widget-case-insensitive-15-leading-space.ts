import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-15-leading-space'
export const test = createFindTest({ content: ' TODO\n todo\n Todo', query: ' todo', matchCount: 3 })
