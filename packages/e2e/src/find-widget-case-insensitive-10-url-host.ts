import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-10-url-host'
export const test = createFindTest({ content: 'EXAMPLE.COM example.com Example.Com', query: 'example.com', matchCount: 3 })
