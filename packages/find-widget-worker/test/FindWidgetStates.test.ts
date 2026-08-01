import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('ignores a command completion after its instance is disposed', async () => {
  const state = Create.createInstance('editor:1:find:late', 31, 0, 0, 800, 600, 1)
  const { promise, resolve } = Promise.withResolvers<void>()
  const command = FindWidgetStates.wrapInstanceCommand(async (current) => {
    await promise
    return {
      ...current,
      value: 'late write',
    }
  })

  const running = command(state.instanceId!)
  FindWidgetStates.disposeInstance(state.instanceId!)
  resolve()
  await running

  expect(FindWidgetStates.get(31)).toBeUndefined()
})

test('registerInstance disposes the state previously registered for the instance', () => {
  Create.createInstance('editor:find:reused', 32, 0, 0, 800, 600, 1)
  const state = Create.createInstance('editor:find:reused', 33, 0, 0, 800, 600, 1)

  expect(FindWidgetStates.get(32)).toBeUndefined()
  expect(FindWidgetStates.get(33).newState).toBe(state)
  expect(FindWidgetStates.resolveUid('editor:find:reused')).toBe(33)
})

test('wrapInstanceCommand ignores an unknown instance', async () => {
  let called = false
  const command = FindWidgetStates.wrapInstanceCommand((state) => {
    called = true
    return state
  })

  await command('unknown')

  expect(called).toBe(false)
})

test('wrapInstanceCommand ignores an instance without state', async () => {
  FindWidgetStates.registerInstance('editor:find:missing-state', 34)
  let called = false
  const command = FindWidgetStates.wrapInstanceCommand((state) => {
    called = true
    return state
  })

  await command('editor:find:missing-state')

  expect(called).toBe(false)
})

test('wrapInstanceCommand ignores an unchanged state', async () => {
  const state = Create.createInstance('editor:find:unchanged', 35, 0, 0, 800, 600, 1)
  const command = FindWidgetStates.wrapInstanceCommand(() => state)

  await command(state.instanceId!)

  expect(FindWidgetStates.get(35).newState).toBe(state)
})

test('wrapInstanceCommand updates the registered state', async () => {
  const state = Create.createInstance('editor:find:update', 36, 0, 0, 800, 600, 1)
  const command = FindWidgetStates.wrapInstanceCommand((current) => ({
    ...current,
    value: 'updated',
  }))

  await command(state.instanceId!)

  expect(FindWidgetStates.get(36).newState.value).toBe('updated')
})

test('wrapInstanceCommand ignores completion after the instance is reassigned', async () => {
  const state = Create.createInstance('editor:find:reassigned', 37, 0, 0, 800, 600, 1)
  const { promise, resolve } = Promise.withResolvers<void>()
  const command = FindWidgetStates.wrapInstanceCommand(async (current) => {
    await promise
    return {
      ...current,
      value: 'stale',
    }
  })

  const running = command(state.instanceId!)
  Create.createInstance(state.instanceId!, 38, 0, 0, 800, 600, 1)
  resolve()
  await running

  expect(FindWidgetStates.get(38).newState.value).toBe('')
})

test('wrapInstanceCommand ignores completion when the registered state is missing', async () => {
  const instanceId = 'editor:find:disposed-state'
  const state = Create.create(39, 0, 0, 800, 600, 1)
  FindWidgetStates.registerInstance(instanceId, 39)
  const { promise, resolve } = Promise.withResolvers<void>()
  const command = FindWidgetStates.wrapInstanceCommand(async (current) => {
    await promise
    return {
      ...current,
      value: 'stale',
    }
  })

  const running = command(instanceId)
  FindWidgetStates.dispose(39)
  resolve()
  await running

  expect(FindWidgetStates.get(39)).toBeUndefined()
  expect(state.value).toBe('')
})
