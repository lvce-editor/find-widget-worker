import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-04-substrings'
export const test = createReplaceAllTest({
  content: 'cat concatenate catfish',
  query: 'cat',
  replacement: 'dog',
  expectedText: 'dog condogenate dogfish',
})
