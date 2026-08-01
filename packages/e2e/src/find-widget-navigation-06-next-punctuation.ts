import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-06-next-punctuation'
export const test = createFindTest({ content: 'x+y x-y x+y x+y', query: 'x+y', matchCount: 3, navigation: { direction: 'next', steps: 1 } })
