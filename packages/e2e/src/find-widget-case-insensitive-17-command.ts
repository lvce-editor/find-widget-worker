import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-case-insensitive-17-command'
export const test = createFindTest({ content: 'npm TEST npm test NPM TEST', query: 'npm test', matchCount: 3 })
