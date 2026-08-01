import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-08-next-four-matches'
export const test = createFindTest({ content: 'aa aa aa aa', query: 'aa', matchCount: 4, navigation: { direction: 'next', steps: 3 } })
