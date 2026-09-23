import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-05-phrase'
export const test = createFindTest({ content: 'HELLO WORLD\nHello World\nhello world', matchCount: 3, query: 'hello world' })
