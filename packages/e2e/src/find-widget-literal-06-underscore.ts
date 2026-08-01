import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-06-underscore'
export const test = createFindTest({ content: 'snake_case snake case snake_case', query: 'snake_case', matchCount: 2 })
