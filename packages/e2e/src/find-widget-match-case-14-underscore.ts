import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-14-underscore'
export const test = createFindTest({ content: 'snake_Case snake_case snake_Case', query: 'snake_Case', matchCount: 2, matchCase: true })
