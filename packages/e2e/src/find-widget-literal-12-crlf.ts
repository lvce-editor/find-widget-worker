import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-12-crlf'
export const test = createFindTest({ content: 'one\r\ntwo\r\none', query: 'one', matchCount: 2 })
