import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Resize from '../src/parts/Resize/Resize.ts'

test('resize updates editor bounds and find widget position', async () => {
  const state = { ...createDefaultState(), height: 20, width: 100, x: 10, y: 10 }
  const dimensions = { height: 40, width: 200, x: 20, y: 30 }
  const result = await Resize.resize(state, dimensions)
  expect(result).toEqual({
    ...state,
    editorHeight: 40,
    editorWidth: 200,
    editorX: 20,
    editorY: 30,
    x: 100,
    y: 40,
  })
})

test('resize preserves the current find widget width', async () => {
  const state = { ...createDefaultState(), height: 20, width: 450, x: 10, y: 10 }
  const result = await Resize.resize(state, { height: 40, width: 800, x: 20, y: 30 })
  expect(result).toEqual(
    expect.objectContaining({
      width: 450,
      x: 350,
      y: 40,
    }),
  )
})
