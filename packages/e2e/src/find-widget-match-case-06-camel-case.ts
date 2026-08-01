import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-match-case-06-camel-case'
export const test = createFindTest({ content: 'findWidget findwidget FindWidget findWidget', query: 'findWidget', matchCount: 2, matchCase: true })
