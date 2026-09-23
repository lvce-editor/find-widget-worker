import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-19-previous-across-lines'
export const test = createFindTest({ content: 'row\nrow\nrow\nrow', matchCount: 4, navigation: { direction: 'previous', steps: 3 }, query: 'row' })
