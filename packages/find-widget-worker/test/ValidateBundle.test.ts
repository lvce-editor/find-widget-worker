import { expect, test } from '@jest/globals'
import { validate, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { readFile } from 'node:fs/promises'

const unusedValidatorSet = /new Set\s*\(Object\.values\(VirtualDomElements\)\)/

test('find widget bundle tree shakes unused virtual dom validator', async () => {
  const bundle = await readFile(new URL('../../../.tmp/dist/dist/findWidgetWorkerMain.js', import.meta.url), 'utf8')
  expect(bundle).not.toMatch(unusedValidatorSet)
  expect(bundle).not.toContain('validVirtualDomElementTypes')
})

test('explicit virtual dom validator imports still validate nodes', () => {
  const validElementType = Object.values(VirtualDomElements).find((value) => typeof value === 'number')
  if (typeof validElementType !== 'number') {
    throw new TypeError('expected a numeric virtual DOM element type')
  }
  expect(validate([{ childCount: 0, type: validElementType }])).toBe(true)
  expect(validate([{ childCount: 0, type: -1 }])).toBe(false)
})
