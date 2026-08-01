import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-02-substrings'
export const test = createFindTest({ content: 'cat concatenate catapult category', query: 'cat', matchCount: 4 })
