import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-10-product-name'
export const test = createFindTest({ content: 'iPhone iphone IPHONE iPhone', matchCase: true, matchCount: 2, query: 'iPhone' })
