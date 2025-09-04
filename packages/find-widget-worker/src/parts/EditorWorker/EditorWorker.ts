import { MockRpc } from '@lvce-editor/rpc'
import { EditorWorker } from '@lvce-editor/rpc-registry'

export const { invoke, set, invokeAndTransfer, dispose, applyEdit, registerMockRpc } = EditorWorker

export type { MockRpc }
