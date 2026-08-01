import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-19-parentheses'
export const test = createReplaceAllTest({
  content: 'call() and call()',
  query: 'call()',
  replacement: 'invoke()',
  expectedText: 'invoke() and invoke()',
})
