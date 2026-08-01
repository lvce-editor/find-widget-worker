import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-09-accented-text'
export const test = createFindTest({ content: 'café cafe CAFÉ café', query: 'café', matchCount: 3 })
