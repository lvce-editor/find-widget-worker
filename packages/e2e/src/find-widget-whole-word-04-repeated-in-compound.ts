import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-04-repeated-in-compound'
export const test = createFindTest({ content: 'item item2 2item item-item', query: 'item', matchCount: 3, wholeWord: true })
