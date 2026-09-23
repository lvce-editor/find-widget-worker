import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-18-css-class'
export const test = createFindTest({ content: '.BUTTON .button .Button', matchCount: 3, query: '.button' })
