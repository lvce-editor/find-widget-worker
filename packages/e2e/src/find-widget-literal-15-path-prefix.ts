import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-15-path-prefix'
export const test = createFindTest({ content: '/src/app.ts\n/src/test.ts\nREADME', query: '/src/', matchCount: 2 })
