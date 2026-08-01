import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-15-tabs'
export const test = createReplaceAllTest({ content: 'a\tb\tc', query: '\t', replacement: '  ', expectedText: 'a  b  c' })
