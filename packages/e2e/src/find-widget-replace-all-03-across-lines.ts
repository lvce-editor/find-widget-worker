import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-03-across-lines'
export const test = createReplaceAllTest({ content: 'old\nkeep\nold', expectedText: 'new\nkeep\nnew', query: 'old', replacement: 'new' })
