import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-18-camel-case-substring'
export const test = createFindTest({ content: 'findWidget findWidgetWorker other', matchCount: 2, query: 'findWidget' })
