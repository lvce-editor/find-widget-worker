import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-08-with-digits'
export const test = createFindTest({ content: 'ITEM42 item42 Item42', query: 'item42', matchCount: 3 })
