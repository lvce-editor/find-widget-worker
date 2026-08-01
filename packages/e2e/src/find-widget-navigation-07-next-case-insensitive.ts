import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-07-next-case-insensitive'
export const test = createFindTest({ content: 'GO go Go', query: 'go', matchCount: 3, navigation: { direction: 'next', steps: 2 } })
