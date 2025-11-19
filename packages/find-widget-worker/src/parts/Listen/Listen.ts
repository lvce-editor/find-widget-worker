import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import { registerCommands } from '../FindWidgetStates/FindWidgetStates.ts'

export const listen = async (): Promise<void> => {
  registerCommands(CommandMap.commandMap)
  const rpc = await WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
  EditorWorker.set(rpc)
}
