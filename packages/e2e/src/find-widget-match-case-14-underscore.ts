import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-14-underscore'
export const test = createFindTest({ content: 'snake_Case snake_case snake_Case', matchCase: true, matchCount: 2, query: 'snake_Case' })
