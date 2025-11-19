import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 450_000

export const instantiations = 1500

export const instantiationsPath = join(root, 'packages', 'find-widget-worker')

export const workerPath = join(root, '.tmp/dist/dist/findWidgetWorkerMain.js')

export const playwrightPath = new URL('../../e2e/node_modules/playwright/index.mjs', import.meta.url).toString()
