import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-20-previous-whole-word'
export const test = createFindTest({
  content: 'word wording word reword word',
  query: 'word',
  matchCount: 3,
  wholeWord: true,
  navigation: { direction: 'previous', steps: 2 },
})
