import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-06-plus-sign'
export const test = createReplaceAllTest({ content: 'a+b a-b a+b', expectedText: 'sum a-b sum', query: 'a+b', replacement: 'sum' })
