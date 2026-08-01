import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-whole-word-16-api'
export const test = createFindTest({ content: 'api apiClient myapi api-v2 API', query: 'api', matchCount: 3, wholeWord: true })
