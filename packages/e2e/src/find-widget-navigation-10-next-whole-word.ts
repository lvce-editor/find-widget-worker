import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-10-next-whole-word'
export const test = createFindTest({
  content: 'cat catfish cat catapult cat',
  matchCount: 3,
  navigation: { direction: 'next', steps: 2 },
  query: 'cat',
  wholeWord: true,
})
