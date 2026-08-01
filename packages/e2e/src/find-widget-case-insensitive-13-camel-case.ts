import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-13-camel-case'
export const test = createFindTest({ content: 'FindWidget findwidget FINDWIDGET', query: 'findWidget', matchCount: 3 })
