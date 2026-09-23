import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-01-next-once'
export const test = createFindTest({ content: 'hit miss hit', matchCount: 2, navigation: { direction: 'next', steps: 1 }, query: 'hit' })
