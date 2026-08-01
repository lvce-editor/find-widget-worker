import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-07-leading-spaces'
export const test = createFindTest({ content: '  indented\nindented\n  indented', query: '  indented', matchCount: 2 })
