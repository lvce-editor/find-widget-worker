import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-17-brackets'
export const test = createReplaceAllTest({
  content: '[todo] keep [todo]',
  query: '[todo]',
  replacement: '[done]',
  expectedText: '[done] keep [done]',
})
