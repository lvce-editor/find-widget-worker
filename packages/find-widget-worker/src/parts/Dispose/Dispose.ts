import * as FindWidgetStates from '../FindWidgetStates/FindWidgetStates.ts'

export const dispose = (uid: number): void => {
  return FindWidgetStates.dispose(uid)
}

export const disposeInstance = (instanceId: string): void => {
  return FindWidgetStates.disposeInstance(instanceId)
}
