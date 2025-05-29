import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.js'
import * as GetIconVirtualDom from '../src/parts/GetIconVirtualDom/GetIconVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getIconVirtualDom returns correct virtual dom element with default type', () => {
  const result = GetIconVirtualDom.getIconVirtualDom('Test')
  expect(result).toEqual({
    type: VirtualDomElements.Div,
    className: 'MaskIcon MaskIconTest',
    role: AriaRoles.None,
    childCount: 0,
  })
})

test('getIconVirtualDom returns correct virtual dom element with custom type', () => {
  const result = GetIconVirtualDom.getIconVirtualDom('Test', VirtualDomElements.Span)
  expect(result).toEqual({
    type: VirtualDomElements.Span,
    className: 'MaskIcon MaskIconTest',
    role: AriaRoles.None,
    childCount: 0,
  })
})
