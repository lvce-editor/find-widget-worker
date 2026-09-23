import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-20-previous-whole-word'
export const test = createFindTest({
  content: 'word wording word reword word',
  matchCount: 3,
  navigation: { direction: 'previous', steps: 2 },
  query: 'word',
  wholeWord: true,
})
