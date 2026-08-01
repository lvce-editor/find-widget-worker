import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-16-prefix'
export const test = createFindTest({ content: 'PrefixValue prefixValue PrefixOther', query: 'Prefix', matchCount: 2, matchCase: true })
