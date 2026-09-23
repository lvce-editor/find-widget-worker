import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-17-brackets'
export const test = createReplaceAllTest({
  content: '[todo] keep [todo]',
  expectedText: '[done] keep [done]',
  query: '[todo]',
  replacement: '[done]',
})
