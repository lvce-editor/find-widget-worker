import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-18-dollar-sign'
export const test = createReplaceAllTest({ content: '$value + $value', expectedText: 'amount + amount', query: '$value', replacement: 'amount' })
