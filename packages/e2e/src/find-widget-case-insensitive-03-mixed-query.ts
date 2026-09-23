import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-03-mixed-query'
export const test = createFindTest({ content: 'widget WIDGET Widget', matchCount: 3, query: 'WiDgEt' })
