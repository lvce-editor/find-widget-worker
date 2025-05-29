import { test, expect } from '@jest/globals'
import { getFindWidgetButtonsEnabled } from '../src/parts/GetFindWidgetButtonsEnabled/GetFindWidgetButtonsEnabled.ts'

test('should enable find buttons when match count is greater than 0', () => {
  const result = getFindWidgetButtonsEnabled(1, '')
  expect(result.findButtonsEnabled).toBe(true)
  expect(result.replaceButtonsEnabled).toBe(false)
})

test('should disable find buttons when match count is 0', () => {
  const result = getFindWidgetButtonsEnabled(0, '')
  expect(result.findButtonsEnabled).toBe(false)
  expect(result.replaceButtonsEnabled).toBe(false)
})

test('should enable replace buttons when value has length', () => {
  const result = getFindWidgetButtonsEnabled(0, 'test')
  expect(result.findButtonsEnabled).toBe(false)
  expect(result.replaceButtonsEnabled).toBe(true)
})

test('should enable both buttons when match count is greater than 0 and value has length', () => {
  const result = getFindWidgetButtonsEnabled(1, 'test')
  expect(result.findButtonsEnabled).toBe(true)
  expect(result.replaceButtonsEnabled).toBe(true)
})
