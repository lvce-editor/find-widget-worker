import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-04-digits'
export const test = createFindTest({ content: 'version 12 version 12 120 12', query: '12', matchCount: 4 })
