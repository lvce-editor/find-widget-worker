import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-navigation-10-next-whole-word'
export const test = createFindTest({
  content: 'cat catfish cat catapult cat',
  query: 'cat',
  matchCount: 3,
  wholeWord: true,
  navigation: { direction: 'next', steps: 2 },
})
