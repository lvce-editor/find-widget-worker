import { test, expect } from '@jest/globals'
import { getFindWidgetPosition } from '../src/parts/GetFindWidgetPosition/GetFindWidgetPosition.ts'

test('getFindWidgetPosition returns correct position for editor at origin', () => {
  const result = getFindWidgetPosition(0, 0, 1000)
  expect(result).toEqual({
    x: 680, // 1000 - 300 - 20
    y: 10,
    width: 300,
    height: 30,
  })
})

test('getFindWidgetPosition returns correct position for editor at offset position', () => {
  const result = getFindWidgetPosition(100, 200, 800)
  expect(result).toEqual({
    x: 580, // 100 + 800 - 300 - 20
    y: 210, // 200 + 10
    width: 300,
    height: 30,
  })
})
