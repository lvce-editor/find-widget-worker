import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-10-emoji'
export const test = createFindTest({ content: '😀 smile 😀 grin 😀', matchCount: 3, query: '😀' })
