import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-16-prefix'
export const test = createFindTest({ content: 'PrefixValue prefixValue PrefixOther', matchCase: true, matchCount: 2, query: 'Prefix' })
