import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-13-boolean'
export const test = createFindTest({ content: 'true trueValue untrue true', matchCount: 2, query: 'true', wholeWord: true })
