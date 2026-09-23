import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-02-substrings'
export const test = createFindTest({ content: 'cat concatenate catapult category', matchCount: 4, query: 'cat' })
