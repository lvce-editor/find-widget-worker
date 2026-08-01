import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-14-punctuation'
export const test = createFindTest({ content: '[ERROR] [error] [Error]', query: '[error]', matchCount: 3 })
