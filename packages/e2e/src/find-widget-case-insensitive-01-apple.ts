import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-01-apple'
export const test = createFindTest({ content: 'APPLE Apple apple aPpLe', query: 'apple', matchCount: 4 })
