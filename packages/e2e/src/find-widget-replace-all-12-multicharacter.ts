// cspell:ignore multicharacter
import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-12-multicharacter'
export const test = createReplaceAllTest({ content: 'x x x', expectedText: 'large large large', query: 'x', replacement: 'large' })
