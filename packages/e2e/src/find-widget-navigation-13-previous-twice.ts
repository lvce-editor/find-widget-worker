import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-13-previous-twice'
export const test = createFindTest({ content: 'one one one', query: 'one', matchCount: 3, navigation: { direction: 'previous', steps: 2 } })
