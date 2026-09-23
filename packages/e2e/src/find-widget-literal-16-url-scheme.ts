import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-16-url-scheme'
export const test = createFindTest({ content: 'https://a.test https://b.test https://c.test', matchCount: 2, query: 'https://' })
