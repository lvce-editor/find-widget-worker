import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-01-repeated-token'
export const test = createFindTest({ content: 'alpha beta alpha\nalpha', query: 'alpha', matchCount: 3 })
