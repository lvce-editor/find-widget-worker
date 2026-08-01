import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-13-boolean'
export const test = createFindTest({ content: 'true trueValue untrue true', query: 'true', matchCount: 2, wholeWord: true })
