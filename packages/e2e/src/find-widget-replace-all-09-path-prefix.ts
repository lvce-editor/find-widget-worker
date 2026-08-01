import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-09-path-prefix'
export const test = createReplaceAllTest({
  content: '/src/app.ts\n/src/test.ts',
  query: '/src/',
  replacement: '/lib/',
  expectedText: '/lib/app.ts\n/lib/test.ts',
})
