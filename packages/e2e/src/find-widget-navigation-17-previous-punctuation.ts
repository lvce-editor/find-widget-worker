import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-17-previous-punctuation'
export const test = createFindTest({ content: 'a+b a+b a-b a+b', query: 'a+b', matchCount: 3, navigation: { direction: 'previous', steps: 1 } })
