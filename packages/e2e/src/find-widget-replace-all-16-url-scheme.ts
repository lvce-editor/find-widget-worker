import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-16-url-scheme'
export const test = createReplaceAllTest({
  content: 'https://one https://two',
  expectedText: 'secure://one secure://two',
  query: 'https://',
  replacement: 'secure://',
})
