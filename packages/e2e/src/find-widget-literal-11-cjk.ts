import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-11-cjk'
export const test = createFindTest({ content: '你好世界 你好 你好吗', query: '你好', matchCount: 3 })
