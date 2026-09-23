// cspell:ignore condogenate
import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-04-substrings'
export const test = createReplaceAllTest({
  content: 'cat concatenate catfish',
  expectedText: 'dog condogenate dogfish',
  query: 'cat',
  replacement: 'dog',
})
