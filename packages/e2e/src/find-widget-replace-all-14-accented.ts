import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-14-accented'
export const test = createReplaceAllTest({ content: 'café café cafe', expectedText: 'bistro bistro cafe', query: 'café', replacement: 'bistro' })
