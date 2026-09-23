import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-02-case-insensitive'
export const test = createReplaceAllTest({ content: 'Red RED red', expectedText: 'blue blue blue', query: 'red', replacement: 'blue' })
