import { test, expect } from '@jest/globals'
import { restoreState } from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState returns value from savedState when value exists', () => {
  const savedState = {
    value: 'test search',
  }
  const result = restoreState(savedState)
  expect(result.value).toBe('test search')
})

test('restoreState returns replacement from savedState when replacement exists', () => {
  const savedState = {
    replacement: 'test replacement',
  }
  const result = restoreState(savedState)
  expect(result.replacement).toBe('test replacement')
})

test('restoreState returns both value and replacement when both exist', () => {
  const savedState = {
    replacement: 'replace term',
    value: 'search term',
  }
  const result = restoreState(savedState)
  expect(result.value).toBe('search term')
  expect(result.replacement).toBe('replace term')
})

test('restoreState returns empty string for value when savedState is null', () => {
  const result = restoreState(null)
  expect(result.value).toBe('')
})

test('restoreState returns empty string for replacement when savedState is null', () => {
  const result = restoreState(null)
  expect(result.replacement).toBe('')
})

test('restoreState returns empty string for value when savedState is undefined', () => {
  const result = restoreState(undefined)
  expect(result.value).toBe('')
})

test('restoreState returns empty string for replacement when savedState is undefined', () => {
  const result = restoreState(undefined)
  expect(result.replacement).toBe('')
})

test('restoreState returns empty string for value when value is missing', () => {
  const savedState = {}
  const result = restoreState(savedState)
  expect(result.value).toBe('')
})

test('restoreState returns empty string for replacement when replacement is missing', () => {
  const savedState = {}
  const result = restoreState(savedState)
  expect(result.replacement).toBe('')
})
