import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-08-underscore-boundary'
export const test = createFindTest({ content: 'snake snake_case snake-case snakes', matchCount: 2, query: 'snake', wholeWord: true })
