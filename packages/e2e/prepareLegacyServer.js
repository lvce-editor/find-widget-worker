import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { patchStaticServer } from '../server/src/patchStaticServer.js'

const root = join(import.meta.dirname, '..', '..')
const workerPath = join(root, '.tmp', 'dist', 'dist', 'findWidgetWorkerMain.js')

const require = createRequire(import.meta.url)
const legacyServerPackagePath = require.resolve('@lvce-editor/legacy-server/package.json')
const legacyRequire = createRequire(legacyServerPackagePath)
const staticServerPackagePath = legacyRequire.resolve('@lvce-editor/static-server/package.json')
const serverStaticPath = join(dirname(staticServerPackagePath), 'static')

await patchStaticServer({ serverStaticPath, workerPath })
