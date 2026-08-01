import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-12-multicharacter'
export const test = createReplaceAllTest({ content: 'x x x', query: 'x', replacement: 'large', expectedText: 'large large large' })
