import { expect, test } from '@jest/globals'
import { getEdits } from '../src/parts/GetEdits/GetEdits.ts'

test('getEdits - preserve case enabled with uppercase', () => {
  const matches = new Uint32Array([0, 0, 5]) // row 0, column 0, length 5
  const value = 'hello'
  const replacement = 'world'
  const lines = ['HELLO world']

  const edits = getEdits(matches, value, replacement, 0, false, lines, true)

  expect(edits).toHaveLength(1)
  expect(edits[0].inserted).toBe('WORLD')
})

test('getEdits - preserve case enabled with lowercase', () => {
  const matches = new Uint32Array([0, 0, 5]) // row 0, column 0, length 5
  const value = 'hello'
  const replacement = 'world'
  const lines = ['hello world']

  const edits = getEdits(matches, value, replacement, 0, false, lines, true)

  expect(edits).toHaveLength(1)
  expect(edits[0].inserted).toBe('world')
})

test('getEdits - preserve case enabled with PascalCase', () => {
  const matches = new Uint32Array([0, 0, 5]) // row 0, column 0, length 5
  const value = 'hello'
  const replacement = 'world'
  const lines = ['Hello world']

  const edits = getEdits(matches, value, replacement, 0, false, lines, true)

  expect(edits).toHaveLength(1)
  expect(edits[0].inserted).toBe('World')
})

test('getEdits - preserve case disabled', () => {
  const matches = new Uint32Array([0, 0, 5]) // row 0, column 0, length 5
  const value = 'hello'
  const replacement = 'world'
  const lines = ['HELLO world']

  const edits = getEdits(matches, value, replacement, 0, false, lines, false)

  expect(edits).toHaveLength(1)
  expect(edits[0].inserted).toBe('world')
})

test('getEdits - preserve case with replaceAll', () => {
  const matches = new Uint32Array([0, 0, 5, 0, 6, 5]) // row 0, columns 0 and 6, length 5 each
  const value = 'hello'
  const replacement = 'world'
  const lines = ['HELLO hello']

  const edits = getEdits(matches, value, replacement, 0, true, lines, true)

  expect(edits).toHaveLength(2)
  expect(edits[0].inserted).toBe('WORLD')
  expect(edits[1].inserted).toBe('world')
})

test('getEdits - preserve case with mixed case patterns', () => {
  const matches = new Uint32Array([0, 0, 5, 0, 6, 5, 0, 12, 5]) // row 0, columns 0, 6, and 12, length 5 each
  const value = 'hello'
  const replacement = 'world'
  const lines = ['HELLO Hello hello']

  const edits = getEdits(matches, value, replacement, 0, true, lines, true)

  expect(edits).toHaveLength(3)
  expect(edits[0].inserted).toBe('WORLD')
  expect(edits[1].inserted).toBe('World')
  expect(edits[2].inserted).toBe('world')
})
