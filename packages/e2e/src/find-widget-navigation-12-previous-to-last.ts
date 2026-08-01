import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-12-previous-to-last'
export const test = createFindTest({ content: 'go go go', query: 'go', matchCount: 3, navigation: { direction: 'previous', steps: 1 } })
