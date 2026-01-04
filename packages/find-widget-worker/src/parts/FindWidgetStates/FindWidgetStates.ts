import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { FindWidgetState } from '../FindWidgetState/FindWidgetState.ts'

export const { dispose, get, getCommandIds, registerCommands, set, wrapCommand, wrapGetter } = ViewletRegistry.create<FindWidgetState>()
