import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { patchStaticServer } from './patchStaticServer.js'

const __dirname = import.meta.dirname

const root = join(__dirname, '..', '..', '..')

const workerPath = join(root, '.tmp', 'dist', 'dist', 'findWidgetWorkerMain.js')

const require = createRequire(import.meta.url)
const staticServerPackagePath = require.resolve('@lvce-editor/static-server/package.json')
const serverStaticPath = join(dirname(staticServerPackagePath), 'static')

await patchStaticServer({ serverStaticPath, workerPath })
