import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { refresh } from '../src/parts/FindWidgetRefresh/FindWidgetRefresh.ts'

test('refresh uses the current value and user input source by default', () => {
  const state = {
    ...createDefaultState(),
    lines: ['hello world'],
    value: 'hello',
  }

  const result = refresh(state)

  expect(result.value).toBe('hello')
  expect(result.matchCount).toBe(1)
})
