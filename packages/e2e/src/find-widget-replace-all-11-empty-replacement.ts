import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-11-empty-replacement'
export const test = createReplaceAllTest({ content: 'remove keep remove', expectedText: ' keep ', query: 'remove', replacement: '' })
