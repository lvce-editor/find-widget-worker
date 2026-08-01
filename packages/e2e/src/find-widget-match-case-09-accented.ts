import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-09-accented'
export const test = createFindTest({ content: 'café Café CAFÉ café', query: 'café', matchCount: 2, matchCase: true })
