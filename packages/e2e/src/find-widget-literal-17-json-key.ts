import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-17-json-key'
export const test = createFindTest({ content: '"name":"one"\n"name":"two"', query: '"name"', matchCount: 2 })
