import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { patchStaticServer } from './patchStaticServer.js'

const require = createRequire(import.meta.url)
const serverPackagePath = require.resolve('@lvce-editor/server/package.json')
const requireFromServer = createRequire(serverPackagePath)
const staticServerPackagePath = requireFromServer.resolve('@lvce-editor/static-server/package.json')
const serverStaticPath = join(dirname(staticServerPackagePath), 'static')

await patchStaticServer({ serverStaticPath })
