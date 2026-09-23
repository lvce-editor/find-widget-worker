import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-01-repeated-word'
export const test = createReplaceAllTest({ content: 'apple apple apple', expectedText: 'pear pear pear', query: 'apple', replacement: 'pear' })
