import { test, expect } from '@jest/globals'
import {
  noResults,
  matchOf,
  matchesFoundFor,
  previousMatch,
  nextMatch,
  close,
  find,
  replace,
  replaceAll,
  matchCase,
  matchWholeWord,
  useRegularExpression,
} from '../src/parts/FindStrings/FindStrings.ts'

test('noResults', () => {
  expect(noResults()).toBe('No Results')
})

test('matchOf', () => {
  expect(matchOf(1, 5)).toBe('1 of 5')
})

test('matchesFoundFor', () => {
  expect(matchesFoundFor(1, 5, 'test')).toBe('1 of 5 found for test')
})

test('previousMatch', () => {
  expect(previousMatch()).toBe('Previous Match')
})

test('nextMatch', () => {
  expect(nextMatch()).toBe('Next Match')
})

test('close', () => {
  expect(close()).toBe('Close')
})

test('find', () => {
  expect(find()).toBe('Find')
})

test('replace', () => {
  expect(replace()).toBe('Replace')
})

test('replaceAll', () => {
  expect(replaceAll()).toBe('Replace All')
})

test('matchCase', () => {
  expect(matchCase()).toBe('Match Case')
})

test('matchWholeWord', () => {
  expect(matchWholeWord()).toBe('Match Whole Word')
})

test('useRegularExpression', () => {
  expect(useRegularExpression()).toBe('Use Regular Expression')
})
