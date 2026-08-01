import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-09-file-extension'
export const test = createFindTest({ content: 'README.MD readme.md Readme.md', query: 'readme.md', matchCount: 3 })
