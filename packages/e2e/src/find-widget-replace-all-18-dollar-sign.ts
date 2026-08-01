import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-18-dollar-sign'
export const test = createReplaceAllTest({ content: '$value + $value', query: '$value', replacement: 'amount', expectedText: 'amount + amount' })
