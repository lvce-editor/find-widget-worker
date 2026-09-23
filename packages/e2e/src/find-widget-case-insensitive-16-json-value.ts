import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-16-json-value'
export const test = createFindTest({ content: '"READY" "ready" "Ready"', matchCount: 3, query: '"ready"' })
