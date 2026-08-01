import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-11-path'
export const test = createFindTest({ content: '/Src/App /src/app /SRC/APP /Src/App', query: '/Src/App', matchCount: 2, matchCase: true })
