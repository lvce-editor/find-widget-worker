import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-11-prefix'
export const test = createFindTest({ content: 'PREFIXED prefixed PreFixed', query: 'prefix', matchCount: 3 })
