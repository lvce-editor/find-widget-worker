import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.js'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as GetSearchFieldButtonVirtualDom from '../src/parts/GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for unchecked button', () => {
  const button = {
    icon: 'TestIcon',
    checked: false,
    title: 'Test Title',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButton,
      title: 'Test Title',
      role: AriaRoles.CheckBox,
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} TestIcon`,
      childCount: 0,
    },
  ])
})

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for checked button', () => {
  const button = {
    icon: 'TestIcon',
    checked: true,
    title: 'Test Title',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.SearchFieldButton} ${ClassNames.SearchFieldButtonChecked}`,
      title: 'Test Title',
      role: AriaRoles.CheckBox,
      ariaChecked: true,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} TestIcon`,
      childCount: 0,
    },
  ])
})
