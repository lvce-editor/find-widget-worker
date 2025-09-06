import { test, expect } from '@jest/globals'
import type { FindWidgetState } from '../src/parts/FindWidgetState/FindWidgetState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FindWidgetStates from '../src/parts/FindWidgetStates/FindWidgetStates.ts'
import * as MaybeMeasureDynamicHeight from '../src/parts/MaybeMeasureDynamicHeight/MaybeMeasureDynamicHeight.ts'
import * as EditorWorker from '../src/parts/EditorWorker/EditorWorker.ts'
import { MockRpc } from '@lvce-editor/rpc'

test('schedule - disabled: does nothing', () => {
  const state: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    uid: 1,
    editorUid: 1,
    width: 300,
    height: 30,
    x: 10,
    y: 20,
    measureDynamicHeight: false,
  }
  // No error should occur
  MaybeMeasureDynamicHeight.schedule(state)
  expect(typeof state).toBe('object')
})

test('schedule - enabled: invokes measurement and updates height', async () => {
  const uid: number = 2
  const initial: FindWidgetState = {
    ...CreateDefaultState.createDefaultState(),
    uid,
    editorUid: 1,
    width: 300,
    height: 30,
    x: 10,
    y: 20,
    measureDynamicHeight: true,
  }
  FindWidgetStates.set(uid, initial, initial)

  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Editor.measureVirtualDomHeight') {
        return 54
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  EditorWorker.set(mockRpc)

  MaybeMeasureDynamicHeight.schedule(initial)

  // wait for debounce timer and async measurement to settle
  await new Promise((resolve) => setTimeout(resolve, 60))

  const { newState } = FindWidgetStates.get(uid)
  expect(newState.height).toBe(54)

  // no restore needed for MockRpc
})
