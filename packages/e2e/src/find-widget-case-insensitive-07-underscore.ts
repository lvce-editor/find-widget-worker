import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-07-underscore'
export const test = createFindTest({ content: 'SNAKE_CASE snake_case Snake_Case', query: 'snake_case', matchCount: 3 })
