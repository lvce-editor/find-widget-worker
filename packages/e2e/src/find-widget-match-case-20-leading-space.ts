import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-20-leading-space'
export const test = createFindTest({ content: ' TODO\n todo\n TODO', query: ' TODO', matchCount: 2, matchCase: true })
