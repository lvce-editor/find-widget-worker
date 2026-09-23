import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-18-previous-case-sensitive'
export const test = createFindTest({
  content: 'Token token Token TOKEN',
  matchCase: true,
  matchCount: 2,
  navigation: { direction: 'previous', steps: 1 },
  query: 'Token',
})
