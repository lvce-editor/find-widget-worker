import { expect, test } from '@jest/globals'
import { preserveCase } from '../src/parts/PreserveCase/PreserveCase.ts'

test('preserveCase - all uppercase', () => {
  const result = preserveCase('HELLO', 'world')
  expect(result).toBe('WORLD')
})

test('preserveCase - all lowercase', () => {
  const result = preserveCase('hello', 'world')
  expect(result).toBe('world')
})

test('preserveCase - PascalCase', () => {
  const result = preserveCase('Hello', 'world')
  expect(result).toBe('World')
})

test('preserveCase - camelCase', () => {
  const result = preserveCase('helloWorld', 'world')
  expect(result).toBe('world')
})

test('preserveCase - mixed case', () => {
  const result = preserveCase('HeLLo', 'world')
  expect(result).toBe('World')
})

test('preserveCase - empty original text', () => {
  const result = preserveCase('', 'world')
  expect(result).toBe('world')
})

test('preserveCase - empty replacement text', () => {
  const result = preserveCase('HELLO', '')
  expect(result).toBe('')
})

test('preserveCase - complex PascalCase', () => {
  const result = preserveCase('HelloWorld', 'test')
  expect(result).toBe('Test')
})

test('preserveCase - complex camelCase', () => {
  const result = preserveCase('helloWorld', 'test')
  expect(result).toBe('test')
})

test('preserveCase - single character uppercase', () => {
  const result = preserveCase('H', 'world')
  expect(result).toBe('WORLD')
})

test('preserveCase - single character lowercase', () => {
  const result = preserveCase('h', 'world')
  expect(result).toBe('world')
})
