import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-03-next-wrap'
export const test = createFindTest({ content: 'one one one', query: 'one', matchCount: 3, navigation: { direction: 'next', steps: 3 } })
