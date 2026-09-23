import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-04-across-lines'
export const test = createFindTest({ content: 'GAMMA\ngamma\nGamma', matchCount: 3, query: 'gamma' })
