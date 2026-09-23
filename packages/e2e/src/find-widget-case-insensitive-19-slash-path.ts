import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-19-slash-path'
export const test = createFindTest({ content: '/SRC/APP /src/app /Src/App', matchCount: 3, query: '/src/app' })
