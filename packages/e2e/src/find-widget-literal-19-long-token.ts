import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-19-long-token'
export const test = createFindTest({
  content: 'abcdefghijklmnopqrstuvwxyz0123456789 abcdefghijklmnopqrstuvwxyz0123456789',
  query: 'abcdefghijklmnopqrstuvwxyz0123456789',
  matchCount: 2,
})
