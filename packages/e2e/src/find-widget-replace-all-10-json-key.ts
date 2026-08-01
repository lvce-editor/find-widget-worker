import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-10-json-key'
export const test = createReplaceAllTest({
  content: '"name":"one", "name":"two"',
  query: '"name"',
  replacement: '"title"',
  expectedText: '"title":"one", "title":"two"',
})
