import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-05-extension'
export const test = createFindTest({ content: 'file.TS file.ts FILE.TS', query: '.TS', matchCount: 2, matchCase: true })
