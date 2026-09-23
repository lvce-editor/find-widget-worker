import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-14-previous-wrap'
export const test = createFindTest({ content: 'up up up', matchCount: 3, navigation: { direction: 'previous', steps: 3 }, query: 'up' })
