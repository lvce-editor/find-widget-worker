import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const { get, set, wrapCommand, dispose, getCommandIds, registerCommands, wrapGetter } = ViewletRegistry.create<FindWidgetState>()

export const wrapCommand2 =
  (fn: any): any =>
  (...args: readonly any[]): any => {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.log(`exec`, fn.name)
    // @ts-ignore
    return wrapCommand(fn)(...args)
  }
