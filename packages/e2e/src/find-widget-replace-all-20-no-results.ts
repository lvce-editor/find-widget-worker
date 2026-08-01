import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-20-no-results'
export const test = createReplaceAllTest({ content: 'alpha beta gamma', query: 'missing', replacement: 'found', expectedText: 'alpha beta gamma' })
