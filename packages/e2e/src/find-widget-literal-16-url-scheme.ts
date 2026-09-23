import { createFindTest } from '../test/CreateFindWidgetTest.js'

export const name = 'find-widget-literal-16-url-scheme'
// eslint-disable-next-line unicorn/prefer-https -- This fixture verifies matching a literal URL scheme in mixed content.
export const test = createFindTest({ content: 'https://a.test http://b.test https://c.test', matchCount: 2, query: 'https://' })
