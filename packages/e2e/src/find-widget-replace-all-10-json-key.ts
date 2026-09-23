import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-10-json-key'
export const test = createReplaceAllTest({
  content: '"name":"one", "name":"two"',
  expectedText: '"title":"one", "title":"two"',
  query: '"name"',
  replacement: '"title"',
})
