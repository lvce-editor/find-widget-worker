import { test, expect } from '@jest/globals'
import type { ISearchFieldButton } from '../src/parts/ISearchFieldButton/ISearchFieldButton.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.js'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.js'
import * as GetSearchFieldButtonVirtualDom from '../src/parts/GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.js'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.js'

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for unchecked button', () => {
  const button: ISearchFieldButton = {
    checked: false,
    icon: 'TestIcon',
    name: 'Test',
    onClick: 'test-onClick',
    title: 'Test Title',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      ariaChecked: false,
      childCount: 1,
      className: ClassNames.SearchFieldButton,
      name: 'Test',
      onClick: 'test-onClick',
      role: AriaRoles.CheckBox,
      tabIndex: 0,
      title: 'Test Title',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      type: VirtualDomElements.Div,
    },
  ])
})

test('getSearchFieldButtonVirtualDom returns correct virtual dom elements for checked button', () => {
  const button: ISearchFieldButton = {
    checked: true,
    icon: 'TestIcon',
    name: 'Test',
    onClick: 'test-onClick',
    title: 'Test Title',
  }
  const result = GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom(button)
  expect(result).toEqual([
    {
      ariaChecked: true,
      childCount: 1,
      className: `${ClassNames.SearchFieldButton} ${ClassNames.SearchFieldButtonChecked}`,
      name: 'Test',
      onClick: 'test-onClick',
      role: AriaRoles.CheckBox,
      tabIndex: 0,
      title: 'Test Title',
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: `${ClassNames.MaskIcon} MaskIconTestIcon`,
      type: VirtualDomElements.Div,
    },
  ])
})
