import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-05-next-to-last'
export const test = createFindTest({ content: 'tag tag tag tag tag', query: 'tag', matchCount: 5, navigation: { direction: 'next', steps: 4 } })
