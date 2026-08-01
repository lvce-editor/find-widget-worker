import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-18-previous-case-sensitive'
export const test = createFindTest({
  content: 'Token token Token TOKEN',
  query: 'Token',
  matchCount: 2,
  matchCase: true,
  navigation: { direction: 'previous', steps: 1 },
})
