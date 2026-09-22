import { setDefaultResultOrder } from 'node:dns'

// The test runner connects to 127.0.0.1, while the legacy server binds to localhost.
setDefaultResultOrder('ipv4first')

await import('@lvce-editor/legacy-server/src/server.js')
