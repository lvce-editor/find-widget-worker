import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-16-url-scheme'
export const test = createReplaceAllTest({
  content: 'https://one https://two',
  query: 'https://',
  replacement: 'secure://',
  expectedText: 'secure://one secure://two',
})
