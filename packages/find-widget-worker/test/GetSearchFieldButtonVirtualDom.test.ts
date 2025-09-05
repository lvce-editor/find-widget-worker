import { test, expect } from '@jest/globals'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.js'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as GetSearchFieldButtonVirtualDom from '../src/parts/GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for unchecked button', () => {
  const button: ISearchFieldButton = {
    icon: 'TestIcon',
    checked: false,
    title: 'Test Title',
    name: 'Test',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButton,
      title: 'Test Title',
      name: 'Test',
      role: AriaRoles.CheckBox,
      ariaChecked: false,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      childCount: 0,
    },
  ])
})

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for checked button', () => {
  const button: ISearchFieldButton = {
    icon: 'TestIcon',
    checked: true,
    title: 'Test Title',
    name: 'Test',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.SearchFieldButton} ${ClassNames.SearchFieldButtonChecked}`,
      title: 'Test Title',
      name: 'Test',
      role: AriaRoles.CheckBox,
      ariaChecked: true,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      childCount: 0,
    },
  ])
})
