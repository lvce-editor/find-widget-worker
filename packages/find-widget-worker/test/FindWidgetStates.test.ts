import { expect, test } from '@jest/globals'
import * as Create from '../src/parts/Create/Create.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'

test('ignores a command completion after its instance is disposed', async () => {
  const state = Create.createInstance('editor:1:find:late', 31, 0, 0, 800, 600, 1)
  const { instanceId } = state
  const { promise, resolve } = Promise.withResolvers<void>()
  const command = FindWidgetStates.wrapInstanceCommand(async (current) => {
    await promise
    return {
      ...current,
      value: 'late write',
    }
  })

  const running = command(instanceId!)
  FindWidgetStates.disposeInstance(instanceId!)
  resolve()
  await running

  expect(FindWidgetStates.get(31)).toBeUndefined()
})
