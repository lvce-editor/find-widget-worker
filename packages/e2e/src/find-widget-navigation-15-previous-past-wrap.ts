import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-15-previous-past-wrap'
export const test = createFindTest({ content: 'x x x x', matchCount: 4, navigation: { direction: 'previous', steps: 5 }, query: 'x' })
