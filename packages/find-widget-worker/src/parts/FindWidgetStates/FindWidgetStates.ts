import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const { get, set, wrapCommand, dispose, getCommandIds, registerCommands, wrapGetter } = ViewletRegistry.create<FindWidgetState>()
