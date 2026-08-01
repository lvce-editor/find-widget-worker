import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-05-hyphen'
export const test = createFindTest({ content: 'foo-bar foo bar foo-bar', query: 'foo-bar', matchCount: 2 })
