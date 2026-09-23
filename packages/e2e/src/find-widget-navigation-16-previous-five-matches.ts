import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-16-previous-five-matches'
export const test = createFindTest({ content: 'tag tag tag tag tag', matchCount: 5, navigation: { direction: 'previous', steps: 2 }, query: 'tag' })
