import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-09-next-across-lines'
export const test = createFindTest({ content: 'line\nline\nline\nline', query: 'line', matchCount: 4, navigation: { direction: 'next', steps: 1 } })
