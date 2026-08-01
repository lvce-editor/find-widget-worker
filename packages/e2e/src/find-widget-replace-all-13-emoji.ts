import { createReplaceAllTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-replace-all-13-emoji'
export const test = createReplaceAllTest({ content: '😀 smile 😀', query: '😀', replacement: '🙂', expectedText: '🙂 smile 🙂' })
