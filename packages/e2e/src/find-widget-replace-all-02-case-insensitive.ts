import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-02-case-insensitive'
export const test = createReplaceAllTest({ content: 'Red RED red', query: 'red', replacement: 'blue', expectedText: 'blue blue blue' })
