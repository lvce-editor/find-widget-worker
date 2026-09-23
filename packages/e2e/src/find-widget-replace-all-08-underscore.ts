import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-08-underscore'
export const test = createReplaceAllTest({
  content: 'snake_case snake snake_case',
  expectedText: 'camelCase snake camelCase',
  query: 'snake_case',
  replacement: 'camelCase',
})
