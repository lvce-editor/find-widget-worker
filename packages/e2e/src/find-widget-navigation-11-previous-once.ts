import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-11-previous-once'
export const test = createFindTest({ content: 'hit miss hit', matchCount: 2, navigation: { direction: 'previous', steps: 1 }, query: 'hit' })
