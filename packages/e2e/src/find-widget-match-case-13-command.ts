import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-13-command'
export const test = createFindTest({ content: 'NPM test npm test NPM TEST', matchCase: true, matchCount: 1, query: 'NPM test' })
