import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-07-hyphenated'
export const test = createReplaceAllTest({
  content: 'foo-bar foo bar foo-bar',
  expectedText: 'joined foo bar joined',
  query: 'foo-bar',
  replacement: 'joined',
})
