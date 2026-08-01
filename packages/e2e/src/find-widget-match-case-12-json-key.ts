import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-12-json-key'
export const test = createFindTest({ content: '"Name": 1, "name": 2, "Name": 3', query: '"Name"', matchCount: 2, matchCase: true })
