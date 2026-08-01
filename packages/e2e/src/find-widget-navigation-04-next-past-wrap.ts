import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-04-next-past-wrap'
export const test = createFindTest({ content: 'x x x x', query: 'x', matchCount: 4, navigation: { direction: 'next', steps: 5 } })
