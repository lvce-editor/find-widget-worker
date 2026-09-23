import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-11-path'
export const test = createFindTest({ content: '/Src/App /src/app /SRC/APP /Src/App', matchCase: true, matchCount: 2, query: '/Src/App' })
