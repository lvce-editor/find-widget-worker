import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-16-url-scheme'
export const test = createFindTest({ content: 'https://a.test http://b.test https://c.test', query: 'https://', matchCount: 2 })
