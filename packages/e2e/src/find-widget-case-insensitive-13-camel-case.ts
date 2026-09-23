// cspell:ignore findwidget FINDWIDGET
import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-13-camel-case'
export const test = createFindTest({ content: 'FindWidget findwidget FINDWIDGET', matchCount: 3, query: 'findWidget' })
