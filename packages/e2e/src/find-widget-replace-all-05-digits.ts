import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-05-digits'
export const test = createReplaceAllTest({ content: '12 120 12', query: '12', replacement: 'twelve', expectedText: 'twelve twelve0 twelve' })
