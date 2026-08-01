import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-03-across-lines'
export const test = createReplaceAllTest({ content: 'old\nkeep\nold', query: 'old', replacement: 'new', expectedText: 'new\nkeep\nnew' })
