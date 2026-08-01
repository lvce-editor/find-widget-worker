import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-02-uppercase-query'
export const test = createFindTest({ content: 'beta BETA Beta', query: 'BETA', matchCount: 3 })
