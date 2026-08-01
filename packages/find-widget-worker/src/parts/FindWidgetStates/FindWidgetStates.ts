import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

const registry = ViewletRegistry.create<FindWidgetState>()
const instanceUids = new Map<string, number>()

export const { get, getCommandIds, registerCommands, set, wrapCommand, wrapGetter } = registry

export const registerInstance = (instanceId: string, uid: number): void => {
  const previousUid = instanceUids.get(instanceId)
  if (previousUid !== undefined && previousUid !== uid) {
    registry.dispose(previousUid)
  }
  instanceUids.set(instanceId, uid)
}

export const resolveUid = (instanceId: string): number | undefined => {
  return instanceUids.get(instanceId)
}

export const dispose = (uid: number): void => {
  const state = registry.get(uid)?.newState
  if (state) {
    const { instanceId } = state
    if (instanceId) {
      instanceUids.delete(instanceId)
    }
  }
  registry.dispose(uid)
}

export const disposeInstance = (instanceId: string): void => {
  const uid = instanceUids.get(instanceId)
  if (uid === undefined) {
    return
  }
  instanceUids.delete(instanceId)
  registry.dispose(uid)
}

export const wrapInstanceCommand = (
  fn: (state: FindWidgetState, ...args: readonly any[]) => FindWidgetState | Promise<FindWidgetState>,
): ((instanceId: string, ...args: readonly any[]) => Promise<void>) => {
  return async (instanceId, ...args): Promise<void> => {
    const uid = instanceUids.get(instanceId)
    if (uid === undefined) {
      return
    }
    const states = registry.get(uid)
    if (!states) {
      return
    }
    const newerState = await fn(states.newState, ...args)
    if (states.oldState === newerState || states.newState === newerState) {
      return
    }
    if (instanceUids.get(instanceId) !== uid) {
      return
    }
    const latest = registry.get(uid)
    if (!latest) {
      return
    }
    registry.set(uid, latest.oldState, newerState)
  }
}
