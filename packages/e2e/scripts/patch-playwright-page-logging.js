import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const file = join(import.meta.dirname, '..', '..', '..', 'node_modules', '@lvce-editor', 'test-with-playwright-worker', 'dist', 'workerMain.js')

const before = `  const page = await browserInstance.newPage();`

const after = `  const page = await browserInstance.newPage();
  page.on('console', message => {
    console.log(\`[browser console] \${message.type()}: \${message.text()}\`);
  });
  page.on('pageerror', error => {
    console.log(\`[browser pageerror] \${error.stack || error.message}\`);
  });`

const content = await readFile(file, 'utf8')

if (content.includes(after)) {
  process.exit(0)
}

if (!content.includes(before)) {
  throw new Error('Could not patch Playwright page logging')
}

await writeFile(file, content.replace(before, after))
