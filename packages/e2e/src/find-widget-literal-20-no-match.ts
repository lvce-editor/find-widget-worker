import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-20-no-match'
export const test = createFindTest({ content: 'alpha beta gamma', query: 'delta', matchCount: 0 })
