import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-03-hyphen-boundary'
export const test = createFindTest({ content: 'foo foo_bar foo-bar foo', query: 'foo', matchCount: 3, wholeWord: true })
