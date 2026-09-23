import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-02-next-twice'
export const test = createFindTest({ content: 'go go go', matchCount: 3, navigation: { direction: 'next', steps: 2 }, query: 'go' })
