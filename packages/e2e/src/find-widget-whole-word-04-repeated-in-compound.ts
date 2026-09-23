import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-04-repeated-in-compound'
export const test = createFindTest({ content: 'item item2 2item item-item', matchCount: 3, query: 'item', wholeWord: true })
